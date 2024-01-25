package com.hackathon.backendorange.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.backendorange.controller.assembler.UserAssembler;
import com.hackathon.backendorange.dto.UserDTO;
import com.hackathon.backendorange.model.User;
import com.hackathon.backendorange.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserAssembler userAssembler;

	@Autowired
	private UserService userService;

	@PostMapping("/create")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<UserDTO> registrarUsuario(@RequestBody UserDTO userDTO) {
		try {
			User user = userAssembler.toEntity(userDTO);
			@SuppressWarnings("unused")
			UserDTO convertedDTO = userAssembler.toDTO(user);
			UserDTO savedUserDTO = userService.saveUser(userDTO);
			return new ResponseEntity<>(savedUserDTO, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
}