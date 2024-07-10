package com.hackathon.backendorange.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {


        @Autowired
        private SecurityFilter securityFilter;

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
            return  httpSecurity
              .csrf(AbstractHttpConfigurer::disable)
              .sessionManagement(session-> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
              .authorizeHttpRequests(autorize -> autorize

                              .requestMatchers(HttpMethod.POST, "/api/auth/login")
                              .permitAll()

                              .requestMatchers(HttpMethod.POST, "/api/auth/register")
                              .permitAll()

                              .requestMatchers(HttpMethod.GET, "/project/hello")
                              .permitAll()

                              .requestMatchers(
                                      "/v2/api-docs",
                                      "/v3/api-docs",
                                      "/swagger-resources",
                                      "/swagger-resources/**",
                                      "/configuration/ui",
                                      "/configuration/security",
                                      "/v3/api-docs/**",
                                      "webjars/**",
                                      "/swagger-ui/**",
                                      "/swagger-ui.html")
                              .permitAll()
                              .anyRequest().authenticated()

                            )
                    .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                    .build();
        }

        @Bean
        public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
        }

        @Bean
        public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
        }

}
