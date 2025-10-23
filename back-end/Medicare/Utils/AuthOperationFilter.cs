using Microsoft.AspNetCore.Authorization;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace MedicareApi.Utils
{
    public class AuthOperationFilter : IOperationFilter
    {
        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {
            var Attributtes = context.ApiDescription.CustomAttributes();
            // Verifica si el endpoint tiene [Authorize]
            var isAuthorize = Attributtes.Any(attr => attr.GetType() == typeof(AuthorizeAttribute));
            // Verifica si tiene [AllowAnonymous]
            var isAllowAnonymous = Attributtes.Any(attr => attr.GetType() == typeof(AllowAnonymousAttribute));

            // Si el endpoint no requiere autorización, no hace nada
            if (!isAuthorize || isAllowAnonymous) return;

            // Si requiere autorización, agrega el esquema de seguridad “Token”
            operation.Security = new List<OpenApiSecurityRequirement>
            {
                new OpenApiSecurityRequirement
                {
                    [
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference {Type = ReferenceType.SecurityScheme, Id = "Token"}
                        }

                    ] = new string[] { }
                }
            };
        }
    }
}
