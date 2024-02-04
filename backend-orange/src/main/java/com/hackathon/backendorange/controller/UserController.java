package com.hackathon.backendorange.controller;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import com.hackathon.backendorange.dto.AutenticationDTO;
import com.hackathon.backendorange.dto.UserDTO;
import com.hackathon.backendorange.service.UserService;

import jakarta.validation.Valid;

import javax.security.auth.login.LoginException;

@RestController
@RequestMapping("/api/auth")
public class UserController {

	@Autowired
	private UserService userService;

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

	@Operation(
			description = "Permite que um usuário se cadastre no sistema.",
			summary = "Cadastro de Usuário",
			responses = {
					@ApiResponse(
							description = "Sucesso - O usuário foi cadastrado com êxito.",
							responseCode = "200"
					),
					@ApiResponse(
							description = "Usuário não encontrado - O usuário não pôde ser localizado.",
							responseCode = "404"
					)
			}
	)
	@GetMapping("/user")
	public ResponseEntity details(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication != null && authentication.isAuthenticated()) {
			UserDetails userDetails = (UserDetails) authentication.getPrincipal();
			UserDTO userDTO = userService.details(userDetails.getUsername());
			return ResponseEntity.ok(userDTO);
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário não autenticado.");
		}
	}

}

