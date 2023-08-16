using FluentValidation;

namespace Application.Patients.Commands.UpdatePatient
{
	public class UpdatePatientCommandValidator : AbstractValidator<UpdatePatientCommand>
	{
		public UpdatePatientCommandValidator()
		{
			RuleFor(P => P.Name)
				.NotEmpty()
				.MaximumLength(30)
				.NotNull();
			RuleFor(v => v.Email)
				.MaximumLength(30).WithMessage("It is not possible to add more than 30 characters to the email")
				.NotEmpty();
			RuleFor(p => p.Gender)
				.NotEmpty();
			RuleFor(p => p.PhoneNumber)
				.Matches(@"^[0-9]+$")
				.WithMessage("Phone Number should contain only numbers")
				.MaximumLength(20);
		}
	}
}
