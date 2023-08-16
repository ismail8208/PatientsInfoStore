using Application.Common.Interfaces;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Hospital_Information_System.Infrastructure.Persistence
{
	public class ApplicationDbContext : DbContext, IApplicationDbContext
	{
		public DbSet<Patient> Patients { get; set; }

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
		{
		}

		public Task<int> SaveChangesAsync()
		{
			return base.SaveChangesAsync();
		}
	}
}

