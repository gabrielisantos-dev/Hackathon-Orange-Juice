package com.hackathon.backendorange.controller.assembler;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import com.hackathon.backendorange.dto.UserDTO;
import com.hackathon.backendorange.model.User;

@Component 
public class UserAssembler {
	
	final ModelMapper modelMapper;
 
	 public UserAssembler() {
		this.modelMapper = new ModelMapper();
	}
	
	public UserDTO toDTO (User user) {
		return modelMapper.map(user, UserDTO.class);
	}
	
	public User toEntity(UserDTO userDTO) {
		return modelMapper.map(userDTO, User.class);
	}
	  
}
