package com.hackathon.backendorange.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackathon.backendorange.controller.assembler.UserAssembler;
import com.hackathon.backendorange.dto.UserDTO;
import com.hackathon.backendorange.model.User;
import com.hackathon.backendorange.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserAssembler userAssembler;

	public UserDTO saveUser(UserDTO userDTO) {

		if (userRepository.findByEmail(userDTO.getEmail()).isPresent()) {
			throw new RuntimeException("E-mail já em uso");
		}

		User userEntity = userAssembler.toEntity(userDTO);
		User savedUser = userRepository.save(userEntity);
		UserDTO savedUserDTO = userAssembler.toDTO(savedUser);

		return savedUserDTO;
	}
	
}
