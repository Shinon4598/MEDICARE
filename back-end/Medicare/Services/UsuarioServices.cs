using AutoMapper;
using MedicareApi.Enums;
using MedicareApi.Models.Rol;
using MedicareApi.Models.Usuario;
using MedicareApi.Models.Usuario.Dto;
using MedicareApi.Repositories;
using MedicareApi.Utils;
using System.Net;

namespace MedicareApi.Services
{
    public class UsuarioServices
    {
        private readonly IMapper _mapper;
        private readonly IUsuarioRepository _repo;
        private readonly RolServices _rolServices;

        public UsuarioServices(IUsuarioRepository repo, IMapper mapper, RolServices rolServices)
        {
            _repo = repo;
            _mapper = mapper;
            _rolServices = rolServices;
        }

        async private Task<Usuario> GetOneByIdOrException(int id)
        {
            var u = await _repo.GetOne(x => x.Id == id);
            if (u == null)
            {
                throw new HttpResponseError(
                    HttpStatusCode.NotFound,
                    $"No se encontro el Usuario con ID = {id}"
                );
            }
            return u;
        }

        async public Task<Usuario> GetOneById(int id) => await GetOneByIdOrException(id);

        async public Task<Usuario> CreateOne(RegisterDTO registerDTO)
        {
            var user = _mapper.Map<Usuario>(registerDTO);

            var rolDefault = await _rolServices.GetOneByName(ROL.USER);

            user.Roles = new List<Rol>() { rolDefault };

            await _repo.CreateOne(user);

            return user;
        }

        async public Task<Usuario> UpdateOne(Usuario usuario)
        {
            await _repo.UpdateOne(usuario);
            return usuario;
        }

        async public Task<Usuario> GetOneByEmail(string email)
        {
            Usuario usuario;

            if (string.IsNullOrEmpty(email)){
                throw new HttpResponseError(
                    HttpStatusCode.BadRequest,
                    "email is empty"
                );
            }

            usuario = await _repo.GetOne(x => x.Email == email);

            return usuario;
        }
    }
}
