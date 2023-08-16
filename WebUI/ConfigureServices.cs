using FluentValidation.AspNetCore;
using WebUI.Filters;

namespace Microsoft.Extensions.DependencyInjection;

public static class ConfigureServices
{
	public static IServiceCollection AddWebUIServices(this IServiceCollection services)
	{
		services.AddControllersWithViews(options =>
		   options.Filters.Add<ApiExceptionFilterAttribute>())
			   .AddFluentValidation(x => x.AutomaticValidationEnabled = false);

		return services;
	}

}

