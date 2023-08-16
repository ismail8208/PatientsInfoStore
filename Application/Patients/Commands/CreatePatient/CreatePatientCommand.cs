using Application.Common.Interfaces;
using AutoMapper;
using Domain.Entities;
using Domain.Enums;
using MediatR;

namespace Application.Patients.Commands.CreatePatients
{
	public record CreatePatientCommand : IRequest<Guid>
	{
		public string? Name { get; set; }
		public int FileNo { get; set; }
		public string? CitizenId { get; set; }
		public DateTime Birthdate { get; set; }
		public Gender Gender { get; set; }
		public string? Natinality { get; set; }
		public string? PhoneNumber { get; set; }
		public string? Email { get; set; }
		public string? Country { get; set; }
		public string? City { get; set; }
		public string? Street { get; set; }
		public string? Address1 { get; set; }
		public string? Address2 { get; set; }
		public string? ContactPerson { get; set; }
		public string? ContactRelation { get; set; }
		public string? ContactPhone { get; set; }
		public DateTime FirstVisitDate { get; set; }
	}
	public class CreatePatientCommandHandler : IRequestHandler<CreatePatientCommand, Guid>
	{
		private readonly IApplicationDbContext context;
		private readonly IMapper mapper;

		public CreatePatientCommandHandler(IApplicationDbContext context, IMapper mapper)
		{
			this.context = context;
			this.mapper = mapper;
		}
		public async Task<Guid> Handle(CreatePatientCommand request, CancellationToken cancellationToken)
		{
			var entity = mapper.Map<Patient>(request);
			entity.RecordCreationDate= DateTime.Now;
			await context.Patients.AddAsync(entity);
			await context.SaveChangesAsync();

			return entity.Id;
		}
	}
}
