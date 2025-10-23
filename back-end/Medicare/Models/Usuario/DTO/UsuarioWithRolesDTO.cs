namespace MedicareApi.Models.Usuario.Dto
{
    public class UsuarioWithRolesDTO
    {
        public int Id { get; set; }

        public string Email { get; set; } = null!;

        public List<string> Roles { get; set; } = new();
    }
}
