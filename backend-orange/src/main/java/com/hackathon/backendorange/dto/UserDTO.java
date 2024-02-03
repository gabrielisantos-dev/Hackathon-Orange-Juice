package com.hackathon.backendorange.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
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

	@NotBlank(message = "O campo 'nome' não pode estar em branco.")
	@Pattern(regexp = "[a-zA-Z]+", message = "O campo 'nome' deve conter apenas letras (sem espaços).")
	@Size(min = 3, max = 20, message = "O campo 'nome' deve ter entre 3 e 50 caracteres.")
	private String nome;

	@NotBlank(message = "O campo 'sobrenome' não pode estar em branco.")
	@Pattern(regexp = "[a-zA-Z]+", message = "O campo 'sobrenome' deve conter apenas letras (sem espaços).")
	@Size(min = 3, max = 50, message = "O campo 'sobrenome' deve ter entre 3 e 50 caracteres.")
	private String sobrenome;

	@NotBlank(message = "O campo 'email' não pode estar em branco.")
	@Size(min = 5, max = 40, message = "O campo 'email' deve ter entre 5 e 100 caracteres.")
	@Email(message = "O email precisa ser válido")
	private String email;

	@NotBlank(message = "O campo 'password' não pode estar em branco.")
	@Size(min = 8, max = 20, message = "O campo 'password' deve ter entre 8 e 20 caracteres.")
	@Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=!]).*$", message = "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.")
	private String password;

}