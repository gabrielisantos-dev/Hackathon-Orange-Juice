package com.hackathon.backendorange.service;

import java.util.Optional;

import com.hackathon.backendorange.exception.UserAlreadyExistsException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

	public UserDTO register(UserDTO userDTO) {

		if(userRepository.existsByEmail(userDTO.getEmail())){
			//throw new UserAlreadyExistsException();
		}

		String encryptedPassword = new BCryptPasswordEncoder().encode(userDTO.getPassword());
		User user = new User();
		BeanUtils.copyProperties(userDTO, user);
		user.setPassword(encryptedPassword);
		user = userRepository.save(user);
		BeanUtils.copyProperties(user, userDTO);

		return userDTO;
	}

	public Boolean existsByEmail(String email) {
		return userRepository.existsByEmail(email);
	}
	
}
