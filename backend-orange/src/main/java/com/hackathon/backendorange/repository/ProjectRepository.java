package com.hackathon.backendorange.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.backendorange.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {


}