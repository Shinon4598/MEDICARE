using MedicareApi.Models.Deporte;
using MedicareApi.Models.Rol;
using MedicareApi.Repositories;
using MedicareApi.Utils;
using System.Net;

namespace MedicareApi.Services
{
    public class RolServices
    {
        private readonly IRolRepository _repo;

        public RolServices(IRolRepository repo)
        {
            _repo = repo;
        }

        async public Task<Rol> GetOneByName(string name)
        {
            var rol = await _repo.GetOne(x => x.Nombre == name);
            return rol;
        }

        async public Task<List<Rol>> GetManyByIds(List<int> Ids)
        {
            if (Ids.Count == 0 || Ids == null)
            {
                throw new HttpResponseError(
                    HttpStatusCode.BadRequest,
                    "La lista de Ids esta vacia"
                );
            }

            var roles = await _repo.GetAll(x => Ids.Contains(x.Id));
            if (roles.ToList().Count > 0)
            {
                return roles.ToList();
            }

            throw new HttpResponseError(
                    HttpStatusCode.BadRequest,
                    "Nigun Id coincide"
            );
        }
    }
}
