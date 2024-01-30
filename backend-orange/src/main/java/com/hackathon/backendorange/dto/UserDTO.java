package com.hackathon.backendorange.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import java.lang.reflect.Constructor;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO  {
	private Long id;
	private String nome;
	private String sobrenome;
	private String email;
	private String password;
}
