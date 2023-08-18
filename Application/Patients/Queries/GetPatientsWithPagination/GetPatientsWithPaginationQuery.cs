using Application.Common.Interfaces;
using Application.Common.Mappings;
using Application.Common.Models;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain.Entities;
using Domain.Enums;
using MediatR;

namespace Application.Patients.Queries.GetPatientsWithPagination
{
	public record GetPatientsWithPaginationQuery : IRequest<PaginatedList<PatientDto>>
	{
		public int SearchBy { get; set; }
		public string? result { get; set; }
		public int PageNumber { get; init; } = 1;
		public int PageSize { get; init; } = 10;
	}

	public class GetPatientsWithPaginationQueryHandler : IRequestHandler<GetPatientsWithPaginationQuery, PaginatedList<PatientDto>>
	{
		private readonly IApplicationDbContext context;
		private readonly IMapper mapper;

		public GetPatientsWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper)
		{
			this.context = context;
			this.mapper = mapper;
		}
		public async Task<PaginatedList<PatientDto>> Handle(GetPatientsWithPaginationQuery request, CancellationToken cancellationToken)
		{
			var query = context.Patients as IQueryable<Patient>;
			if (!string.IsNullOrEmpty(request.result))
				query = request.SearchBy switch
				{
					(int)SearchBy.Name => query.Where(P => P.Name.StartsWith(request.result)).OrderBy(p => p.Name),
					(int)SearchBy.PhoneNumber => query.Where(P => P.PhoneNumber.StartsWith(request.result)).OrderBy(p => p.PhoneNumber),
					(int)SearchBy.FileNo => query.Where(P => P.FileNo.ToString().StartsWith(request.result)).OrderBy(p => p.FileNo),
					_ => query.OrderByDescending(p => p.RecordCreationDate)
				};
			return await query.ProjectTo<PatientDto>(mapper.ConfigurationProvider).PaginatedListAsync(request.PageNumber, request.PageSize);
		}
	}


}

