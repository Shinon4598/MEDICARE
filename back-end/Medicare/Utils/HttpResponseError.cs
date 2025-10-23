using System.Net;

namespace MedicareApi.Utils
{
    public class HttpResponseError : Exception
    {
        public HttpStatusCode StatusCode { get; set; }
        public new string Message { get; set; } = null!;

        public HttpResponseError(HttpStatusCode statusCode, string message) : base(message)
        {
            StatusCode = statusCode;
            Message = message;
        }
    }
}
