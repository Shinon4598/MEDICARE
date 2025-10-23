using MedicareApi.Config;
using MedicareApi.Models.Usuario;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Linq.Expressions;

namespace MedicareApi.Repositories
{
    public interface IUsuarioRepository : IRepository<Usuario>
    {
    }
    public class UsuarioRepository : Repository<Usuario>, IUsuarioRepository
    {
        private readonly ApplicationDbContext _db;

        public UsuarioRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }
        async new public Task<Usuario> GetOne(Expression<Func<Usuario, bool>>? filter = null)
        {
            IQueryable<Usuario> query = dbSet;
            if (filter != null)
            {
                query = query.Where(filter).Include(x => x.Roles);
            }
            return await query.FirstOrDefaultAsync();
        }
    }
}
