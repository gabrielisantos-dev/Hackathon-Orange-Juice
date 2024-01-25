package com.hackathon.backendorange.controller;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.backendorange.dto.UserDTO;
import com.hackathon.backendorange.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	
	private UserService userService;
	
	public UserController(UserService userService) {
	 this.userService = userService;
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public UserDTO registrarUsuario(@RequestBody UserDTO userDTO) {
		return userService.saveUser(userDTO);
	}
	
	
}

