using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Common.Mappings;
using AutoMapper;
using Domain.Entities;
using Domain.Enums;
using MediatR;

namespace Application.Patients.Commands.UpdatePatient
{
	public record UpdatePatientCommand : IRequest
	{
		public Guid? Id { get; set; }
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
	public class UpdatePatientCommandHandler : IRequestHandler<UpdatePatientCommand>
	{
		private readonly IApplicationDbContext context;
		private readonly IMapper mapper;

		public UpdatePatientCommandHandler(IApplicationDbContext context, IMapper mapper)
		{
			this.context = context;
			this.mapper = mapper;
		}
		public async Task Handle(UpdatePatientCommand request, CancellationToken cancellationToken)
		{
			var entity = await context.Patients.FindAsync(new object[] { request.Id }, cancellationToken);
			if (entity == null)
			{
				throw new NotFoundException(nameof(Patient), request.Id);
			}
/*			entity = mapper.Map<Patient>(request);
			context.Patients.Update(entity); */
			entity.Address1 = request.Address1;
			entity.Address2 = request.Address2;
			entity.Birthdate = request.Birthdate;
			entity.Gender = request.Gender;
			entity.CitizenId = request.CitizenId;
			entity.City = request.City;
			entity.ContactPerson = request.ContactPerson;
			entity.ContactPhone = request.ContactPhone;
			entity.ContactRelation = request.ContactRelation;
			entity.Country = request.Country;
			entity.Email = request.Email;
			entity.FileNo = request.FileNo;
			entity.FirstVisitDate = request.FirstVisitDate;
			entity.Name = request.Name;
			entity.Natinality = request.Natinality;
			entity.PhoneNumber = request.PhoneNumber;
			entity.Street = request.Street;

			await context.SaveChangesAsync();
		}
	}
}
