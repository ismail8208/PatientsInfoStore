using Domain.Entities;
using Hospital_Information_System.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence
{
	public class ApplicationDbContextInitialiser
	{
		private readonly ILogger<ApplicationDbContextInitialiser> logger;
		private readonly ApplicationDbContext context;

		public ApplicationDbContextInitialiser(ILogger<ApplicationDbContextInitialiser> logger, ApplicationDbContext context)
		{
			this.logger = logger;
			this.context = context;
		}

		public async Task InitialiseAsync()
		{
			try
			{
				if (context.Database.IsSqlServer())
				{
					await context.Database.MigrateAsync();
				}
			}
			catch (Exception ex)
			{
				logger.LogError(ex, "An error occurred while initialising the database.");
				throw;
			}
		}
		public async Task SeedAsync()
		{
			try
			{
				await TrySeedAsync();
			}
			catch (Exception ex)
			{
				logger.LogError(ex, "An error occurred while seeding the database.");
				throw;
			}
		}
		public async Task TrySeedAsync()
		{
			// Default data
			// Seed, if necessary
			if (!context.Patients.Any())
			{
				var patients = new List<Patient>();
				using (StreamReader r = new StreamReader("DummyData.json"))
				{
					string json = r.ReadToEnd();
					patients = JsonConvert.DeserializeObject<List<Patient>>(json);
					foreach (var patient in patients)
					{
						patient.Id = Guid.NewGuid();
						patient.RecordCreationDate = DateTime.Now;
					}
				}

				context.Patients.AddRange(patients);

				await context.SaveChangesAsync();
			}

		}

	}
}
