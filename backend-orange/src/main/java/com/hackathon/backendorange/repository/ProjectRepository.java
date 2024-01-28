package com.hackathon.backendorange.repository;

import com.hackathon.backendorange.model.Project;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    @Transactional
    @Modifying
    @Query(nativeQuery = true, value = "select * from project where user_id = :user_id ")
    List<Project> getUserProjects(@Param("user_id") Long user_id);
}

