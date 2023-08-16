using Application.Common.Models;
using Application.Patients.Commands.CreatePatients;
using Application.Patients.Commands.DeletePatients;
using Application.Patients.Commands.UpdatePatient;
using Application.Patients.Queries.GetPatient;
using Application.Patients.Queries.GetPatientsWithPagination;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
	public class PatientsController : ApiControllerBase
	{
		[HttpGet]
		public async Task<ActionResult<PaginatedList<PatientDto>>> GetPatientsPagination([FromQuery] GetPatientsWithPaginationQuery query)
		{
			return await Mediator.Send(query);
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<Patient>> Update([FromRoute] Guid id)
		{
			return await Mediator.Send(new GetPatientQuery(id));
		}

		[HttpPost]
		public async Task<ActionResult<Guid>> Create([FromBody] CreatePatientCommand command)
		{
			return await Mediator.Send(command);
		}

		[HttpPut]
		public async Task<ActionResult> Update(UpdatePatientCommand command)
		{

			await Mediator.Send(command);

			return NoContent();
		}
		[HttpDelete("{id}")]
		public async Task<ActionResult> Delete(Guid id)
		{
			await Mediator.Send(new DeletePatientCommand(id));

			return NoContent();
		}
	}
}