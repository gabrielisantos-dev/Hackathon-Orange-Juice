package com.hackathon.backendorange.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "usuario")
@NoArgsConstructor
public class User implements UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String nome;
	
	@Column(nullable = false)
	private String sobrenome;
	
	@Column(nullable = false, unique = true)
	private String email;
	
	@Column(nullable = false)
	private String password;

	@JsonIgnore
	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE, orphanRemoval = true)
	private Set<Project> projects = new HashSet<>();

@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
	    return Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
	}
	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}


}




