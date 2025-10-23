using MedicareApi.Enums;
using MedicareApi.Models.Usuario;
using MedicareApi.Models.Usuario.Dto;
using MedicareApi.Services;
using MedicareApi.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Win32;

namespace MedicareApi.Controllers{
    [Route("api/auth")]
    [ApiController]

    public class AuthController : ControllerBase{
        
        private readonly AuthServices _authServices;

        public AuthController(AuthServices authServices)
        {
            _authServices = authServices;
        }

        [HttpPost("register")]
        async public Task<ActionResult<Usuario>> Register([FromBody]RegisterDTO register)
        {
            try
            {
                return Ok(await _authServices.RegisterUser(register));
            }
            catch (HttpResponseError ex)
            {
                return StatusCode(
                    (int)ex.StatusCode,
                    new HttpMessage(ex.Message)
                );
                throw;
            }
            catch(Exception ex)
            {
                return StatusCode(
                    StatusCode.Status500InternalServerError,
                    new HttpMessage(ex.Message)
                )
            }
        }

        [HttpPut("{id}/roles")]
        [Authorize(Roles = ROL.ADMIN)]
        async public Task<ActionResult<UsuarioWithRolesDTO>> AssignRoles(int id, [FromBody]List<int> rolesIds)
        {
            try
            {
                return Ok(await _authServices.AssignRoles(id, rolesIds));
            }
        }
    }
}