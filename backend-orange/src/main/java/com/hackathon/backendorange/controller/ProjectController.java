package com.hackathon.backendorange.controller;

import com.hackathon.backendorange.model.Project;
import com.hackathon.backendorange.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {


    @Autowired
    private ProjectRepository projectRepository;


 @GetMapping
 public List<Project> getAll(){
     return projectRepository.findAll();
 }

}