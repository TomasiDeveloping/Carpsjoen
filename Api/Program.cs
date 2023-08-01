using Api.Configurations;
using HealthChecks.UI.Client;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Serilog;

try
{
    Log.Logger.Information("Starting web host");

    var builder = WebApplication.CreateBuilder(args);

    // Configure Serilog
    builder.Host.UseSerilog((context, configuration) =>
    {
        configuration.WriteTo.Console()
            .ReadFrom.Configuration(context.Configuration)
            .Enrich.WithProperty("ApplicationName", "Carpsjoen");
    });

    // Add services to the container.
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    builder.Services.ConfigureCors();
    builder.Services.ConfigureApiVersioning();
    builder.Services.ConfigureHealthChecks(builder.Configuration);

    var app = builder.Build();


    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseCors("CorsPolicy");

    app.UseSerilogRequestLogging();


    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.MapControllers();

    app.MapHealthChecks("/health", new HealthCheckOptions
    {
        ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
    });

    app.Run();
}
catch (Exception e)
{
    Log.Fatal(e, "Host terminated unexpectedly");
}
finally
{
    Log.CloseAndFlush();
}