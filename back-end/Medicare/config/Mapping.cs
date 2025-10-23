using AutoMapper;
using MedicareApi.Models.Rol;
using MedicareApi.Models.Usuario;

namespace MedicareApi.Config
{
    public class Mapping : Profile
    {
        public Mapping(){

            CreateMap<RegisterDTO, Usuario>();
            CreateMap<Usuario, UsuarioWithRolesDTO>().ForMember(
                dest => dest.Roles,
                opt => opt.MapFrom(src => src.Roles.Select(r => r.Nombre).ToList())
            )
        }
    }
}
