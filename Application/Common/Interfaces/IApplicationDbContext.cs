using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Application.Common.Interfaces
{
	public interface IApplicationDbContext
	{
		DbSet<Patient> Patients { get; set; }
		Task<int> SaveChangesAsync();
	}
}