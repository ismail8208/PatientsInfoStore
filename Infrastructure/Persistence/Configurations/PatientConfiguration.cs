using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Configurations
{
	public class PatientConfiguration : IEntityTypeConfiguration<Patient>
	{
		public void Configure(EntityTypeBuilder<Patient> builder)
		{
			builder.Property(p => p.Name)
				.IsRequired();
			builder.Property(p => p.FileNo)
				.IsRequired();
			builder.Property(p => p.Email)
				.HasMaxLength(30)
				.IsRequired();
		}
	}
}
