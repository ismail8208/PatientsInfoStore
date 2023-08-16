using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Patients.Queries.GetPatient
{
	public record GetPatientQuery(Guid Id) : IRequest<Patient>;

	public class GetPatientQueryHandler : IRequestHandler<GetPatientQuery, Patient>
	{
		private readonly IApplicationDbContext context;

		public GetPatientQueryHandler(IApplicationDbContext context)
		{
			this.context = context;
		}
		public async Task<Patient> Handle(GetPatientQuery request, CancellationToken cancellationToken)
		{
			var entity = await context.Patients.FindAsync(new object[] { request.Id }, cancellationToken);

			if (entity == null)
			{
				throw new NotFoundException(nameof(Patient), request.Id);
			}

			return entity;
		}
	}
}
