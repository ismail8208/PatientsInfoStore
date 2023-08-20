using Application.Common.Interfaces;
using Domain.Entities;
using Infrastructure.Persistence.Configurations;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Hospital_Information_System.Infrastructure.Persistence
{
	public class ApplicationDbContext : DbContext, IApplicationDbContext
	{
		public DbSet<Patient> Patients { get; set; }

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.ApplyConfiguration(new PatientConfiguration());
			base.OnModelCreating(modelBuilder);
		}

		public Task<int> SaveChangesAsync()
		{
			return base.SaveChangesAsync();
		}
	}
}

