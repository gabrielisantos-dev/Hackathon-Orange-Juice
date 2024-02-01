package com.hackathon.backendorange.controller;

import com.hackathon.backendorange.exception.UserNotFoundException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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

@RestController
@RequestMapping("/api/auth")
public class UserController {
	
	
	private UserService userService;

	@Autowired
	private TokenService tokenService;

	@Autowired
	private AuthenticationManager authenticationManager;
	
	public UserController(UserService userService) {
	 this.userService = userService;
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
					),
					@ApiResponse(
							description = "Usuário não encontrado - O usuário não está cadastrado no sistema.",
							responseCode = "404"
					)
			}
	)

	@PostMapping("/login")
	public ResponseEntity login(@RequestBody @Valid AutenticationDTO autenticationDTO) {

		var usernamePassword = new UsernamePasswordAuthenticationToken(autenticationDTO.getEmail(), autenticationDTO.getPassword());
		if(!userService.existsByEmail(autenticationDTO.getEmail())){
			throw new UserNotFoundException();
		}
		var auth = authenticationManager.authenticate(usernamePassword);
		var token = tokenService.generateToken((User) auth.getPrincipal());

		return ResponseEntity.ok(new LoginResponseDTO(token));
	}



}

