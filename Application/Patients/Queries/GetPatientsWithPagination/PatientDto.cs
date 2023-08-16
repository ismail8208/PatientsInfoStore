using Application.Common.Mappings;
using Domain.Entities;

namespace Application.Patients.Queries.GetPatientsWithPagination
{
	public class PatientDto : IMapFrom<Patient>
	{
		public Guid Id { get; set; }
		public string? Name { get; set; }
		public int FileNo { get; set; }
		public string? PhoneNumber { get; set; }
		public string? Email { get; set; }
		public string? City { get; set; }
		public DateTime Birthdate { get; set; }
	}
}
