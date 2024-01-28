package com.hackathon.backendorange.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table
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
    @Email(message = "O email precisa ser válido")
	private String email;
	
	@Column(nullable = false)
	@NotBlank(message = "A senha não pode ficar em branco")
	@Size(min = 5, message = "A senha deve ter no mínimo 5 caracteres")
	private String password;

	@JsonIgnore
	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE, orphanRemoval = true)
	private Set<Project> projects = new HashSet<>();
}
