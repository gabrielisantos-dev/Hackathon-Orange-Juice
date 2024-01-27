package com.hackathon.backendorange.controller;

import com.hackathon.backendorange.exception.UserNotFoundException;
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

	@PostMapping("/register")
	@ResponseStatus(HttpStatus.CREATED)
	public UserDTO register(@RequestBody @Valid UserDTO userDTO) {
		return userService.register(userDTO);
	}
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

