package com.hackathon.backendorange.dto;

import lombok.Data;

@Data
public class UserDTO {
	private Long id;
	private String nome;
	private String sobrenome;
	private String email;
	private String password;
	
}
