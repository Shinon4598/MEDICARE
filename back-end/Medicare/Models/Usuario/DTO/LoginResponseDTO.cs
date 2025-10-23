namespace MedicareApi.Models.Usuario.Dto
{
    public class LoginResponseDTO
    {
        public string Token { get; set; } = null!;
        public UsuarioWithRolesDTO User { get; set; } = null!;
    }
}
