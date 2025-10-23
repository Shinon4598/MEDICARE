using MedicareApi.Models.Rol;
using MedicareApi.Models.Usuario;
using Microsoft.EntityFrameworkCore;

namespace MedicareApi.Config
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options){ }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Rol> Roles {get;set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>().HasIndex(x => x.Email).IsUnique();
            modelBuilder.Entity<Rol>().HasIndex(x => x.Nombre).IsUnique();

        modelBuilder.Entity<Usuario>()
            .HasMany(x => x.Roles)
            .WithMany()
            .UsingEntity<RolUsuario>(
                r => r.HasOne<Rol>().WithMany().HasForeignKey(x => x.RolId),
                l => l.HasOne<Usuario>().WithMany().HasForeignKey(x => x.UsuarioId)
            );

        }
    }
}
