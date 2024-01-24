package com.hackathon.backendorange.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.backendorange.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> findByNome(String nome);
	
}
