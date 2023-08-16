using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Patients.Commands.DeletePatients
{
	public record DeletePatientCommand(Guid Id) : IRequest;

	public class DeletePatientCommandHandler : IRequestHandler<DeletePatientCommand>
	{
		private readonly IApplicationDbContext context;

		public DeletePatientCommandHandler(IApplicationDbContext context)
		{
			this.context = context;
		}
		public async Task Handle(DeletePatientCommand request, CancellationToken cancellationToken)
		{
			var entity = await context.Patients.FindAsync(new object[] { request.Id }, cancellationToken);
			if (entity == null)
			{
				throw new NotFoundException(nameof(Patient), request.Id);
			}
			context.Patients.Remove(entity);

			await context.SaveChangesAsync();
		}
	}

}
