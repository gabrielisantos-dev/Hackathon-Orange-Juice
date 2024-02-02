package com.hackathon.backendorange.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition
        (info = @Info(contact =
        @Contact(name = "Repositório",
                url = "https://github.com/gabrielisantos-dev/Hackathon-Orange-Juice"),
                description = "Documentação de API para o hackathon do programa de formação Orange Juice e FCamara.",
                title = "Orange Portfólio"), servers = {@Server(description = "Local", url = "http://localhost:8080"),
                @Server(description = "Deploy", url = "http://orange-9dj9.onrender.com")},

                security = {
                        @SecurityRequirement(
                                name = "bearerAuth"
                        )

                })


@SecurityScheme
        (name = "bearerAuth",
                description = "JWT auth description",
                scheme = "bearer", type = SecuritySchemeType.HTTP,
                bearerFormat = "JWT", in = SecuritySchemeIn.HEADER)


public class OpenApiConfig {
}
