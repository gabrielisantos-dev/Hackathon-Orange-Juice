package com.hackathon.backendorange.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.hackathon.backendorange.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	UserDetails findByEmail(String email);

    Optional<User> getByEmail(String email);

    Boolean existsByEmail(String email);


    Optional<User> findByEmailAndPassword(String email, String password);

}
