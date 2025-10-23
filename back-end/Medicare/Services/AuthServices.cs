using AutoMapper;
using MedicareApi.Models.Rol;
using MedicareApi.Models.Usuario;
using MedicareApi.Models.Usuario.Dto;
using MedicareApi.Repositories;
using MedicareApi.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Text.RegularExpressions;

namespace MedicareApi.Services
{
    public class AuthServices
    {
        private readonly UsuarioServices _userServices;
        private readonly RolServices _rolServices;
        private readonly IEncoderServices _encoderServices;
        private readonly IMapper _mapper;

        private readonly IConfiguration _config;
        private string _secret;

        public AuthServices(UsuarioServices userServices, IEncoderServices encoderServices, IConfiguration config, IMapper mapper, RolServices rolServices)
        {
            _userServices = userServices;
            _encoderServices = encoderServices;
            _config = config;
            _secret = _config.GetSection("Secrets")?.GetSection("JWT")?.Value?.ToString() ?? null!;
            _mapper = mapper;
            _rolServices = rolServices;
        }

        async public Task<Usuario> RegisterUser(RegisterDTO register)
        {
            var user = await _userServices.GetOneByEmail(register.Email);
            if (user != null)
            {
                throw new HttpResponseError(HttpStatusCode.BadRequest, "User already exists");
            }

            if (register.Password != register.ConfirmPassword){
                throw new HttpResponseError(HttpStatusCode.BadRequest, "Password doesn't match");
            }

            register.Password = _encoderServices.Encode(register.Password);

            var userCreated = await _userServices.CreateOne(register);

            return userCreated;
        }

        async public Task<LoginResponseDTO> Login(LoginDTO login)
        {
            bool IsEmail = Regex.IsMatch(login.Email, @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");            Usuario user;

            if(!IsEmail)
            {
                throw new HttpResponseError(HttpStatusCode.BadRequest, "Invalid credentials");
            }
            user = await _userServices.GetOneByEmail(login.Email);

            if (user == null ) {
                throw new HttpResponseError(HttpStatusCode.BadRequest, "Invalid credentials");
            }

            bool IsPassMatch = _encoderServices.Verify(login.Password, user.Password);

            if (!IsPassMatch) {
                throw new HttpResponseError(HttpStatusCode.BadRequest, "Invalid credentials");
            }

            var token = GenerateJwtToken(user);

            return new LoginResponseDTO { Token = token, User = _mapper.Map<UsuarioWithRolesDTO>(user)  };
        }

        public string GenerateJwtToken(Usuario usuario)
        {
            var claims = new ClaimsIdentity();
            claims.AddClaim(new Claim("id", usuario.Id.ToString()));

            if (usuario.Roles != null)
            {
                foreach (var role in usuario.Roles)
                {
                    var claim = new Claim(ClaimTypes.Role, role.Nombre);
                    claims.AddClaim(claim);
                }
            }
            var key = Encoding.UTF8.GetBytes(_secret);
            var symmetricKey = new SymmetricSecurityKey(key);

            var credentials = new SigningCredentials(
                symmetricKey,
                SecurityAlgorithms.HmacSha256Signature
            );

            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = credentials,
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenConfig = tokenHandler.CreateToken(tokenDescriptor);
            string token = tokenHandler.WriteToken(tokenConfig);

            return token;
        }

        async public Task<UsuarioWithRolesDTO> AssignRoles(int id, List<int> rolesIds)
        {
            var usuario = await _userServices.GetOneById(id);
            List<Rol> roles = await _rolServices.GetManyByIds(rolesIds);
            usuario.Roles = roles;
            var updated = await _userServices.UpdateOne(usuario);
            return _mapper.Map<UsuarioWithRolesDTO>(updated);
        }
    }
}
