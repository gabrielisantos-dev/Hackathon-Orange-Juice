package com.hackathon.backendorange.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	
	@Column(nullable = false)
	@NotBlank(message = "O nome não pode ficar em branco")
	@Size(min = 1, max = 100,message = "O nome deve ter entre 1 e 100 caracteres")
	private String nome;
	
	@Column(nullable = false)
	@NotBlank(message = "O sobrenome não pode ficar em branco")
	@Size(min = 1, max = 150, message = "O sobrenome deve ter entre 1 e 150 caracteres")
	private String sobrenome;
	
	@Column(nullable = false, unique = true)
	@NotBlank(message = "O email não pode ficar em branco")
	@Size(max = 255, message = "O email não pode ter mais que 255 caracteres")
	private String email;
	
	@Column(nullable = false)
	@NotBlank(message = "A senha não pode ficar em branco")
	@Size(min = 5, message = "A senha deve ter no mínimo 5 caracteres")
	private String password;
}
