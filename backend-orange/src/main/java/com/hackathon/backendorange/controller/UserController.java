package com.hackathon.backendorange.controller;

import com.hackathon.backendorange.exception.UserNotFoundException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.backendorange.dto.AutenticationDTO;
import com.hackathon.backendorange.dto.LoginResponseDTO;
import com.hackathon.backendorange.dto.UserDTO;
import com.hackathon.backendorange.model.User;
import com.hackathon.backendorange.security.TokenService;
import com.hackathon.backendorange.service.UserService;

import jakarta.validation.Valid;

import javax.security.auth.login.LoginException;

@RestController
@RequestMapping("/api/auth")
public class UserController {
	
	
	UserService userService;

	public UserController(UserService userService) {
	 this.userService = userService;
	}

	@Operation(
			description = "Permite que um usuário se cadastre no sistema.",
			summary = "Cadastro de Usuário",
			responses = {
					@ApiResponse(
							description = "Sucesso - O usuário foi cadastrado com êxito.",
							responseCode = "201"
					),
					@ApiResponse(
							description = "Usuário já cadastrado no sistema",
							responseCode = "409"
					)
			}
	)
	@PostMapping("/register")
	@ResponseStatus(HttpStatus.CREATED)
	public UserDTO register(@RequestBody @Valid UserDTO userDTO) {
		return userService.register(userDTO);
	}


	@Operation(
			description = "Permite que um usuário faça login no sistema.",
			summary = "Operação de Login",
			responses = {
					@ApiResponse(
							description = "Sucesso - O usuário foi autenticado com êxito.",
							responseCode = "200"
					),
					@ApiResponse(
							description = "Credenciais Inválidas - As informações de login fornecidas são incorretas.",
							responseCode = "401"
					)
			}
	)

	@PostMapping("/login")
	public ResponseEntity login(@RequestBody @Valid AutenticationDTO autenticationDTO) throws LoginException {
		return ResponseEntity.ok(userService.login(autenticationDTO));
	}
	@Operation(
			description = "Permite que um usuário se deslogue do sistema.",
			summary = "Operação de Logout",
			responses = {
					@ApiResponse(
							description = "Sucesso - O usuário foi deslogado com êxito.",
							responseCode = "200"
					),
					@ApiResponse(
							description = "Usuário não autenticado - O usuário não está autenticado no sistema.",
							responseCode = "401"
					)
			}
	)

	@PostMapping("/logout")
	public ResponseEntity<String> logout(HttpServletRequest request) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication != null && authentication.isAuthenticated()) {
			SecurityContextHolder.clearContext();
			return ResponseEntity.ok("Usuário deslogado com sucesso.");
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário não autenticado.");
		}
	}

}

