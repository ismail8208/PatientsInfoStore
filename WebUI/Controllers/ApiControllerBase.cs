using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public abstract class ApiControllerBase : ControllerBase
	{
		private IMediator? _mediator;

		protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetRequiredService<IMediator>();
	}
}
