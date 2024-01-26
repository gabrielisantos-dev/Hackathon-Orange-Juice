package com.hackathon.backendorange.service;

import com.cloudinary.Cloudinary;
import com.hackathon.backendorange.controller.assembler.ProjectAssembler;
import com.hackathon.backendorange.dto.ProjectDTO;
import com.hackathon.backendorange.model.Project;
import com.hackathon.backendorange.model.User;
import com.hackathon.backendorange.repository.ProjectRepository;
import com.hackathon.backendorange.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.IOException;
import java.util.*;
import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProjectAssembler projectAssembler;

    @Autowired
    private Cloudinary cloudinary;

    public Optional<List<Project>> getAllProjects() {
        return Optional.ofNullable(repository.findAll());
    }

    public Optional<List<Project>> getUserProjects(Long user_id) {
        User user = userRepository.findById(user_id).orElseThrow(() -> new RuntimeException());
        return Optional.ofNullable(repository.getUserProjects(user_id));
    }

//    public ProjectDTO saveProject(ProjectDTO projectDTO) {
//        Project projectEntity = projectAssembler.toEntity(projectDTO);
//
//        Project savedProject = repository.save(projectEntity);
//        ProjectDTO savedProjectDTO = projectAssembler.toDTO(savedProject);
//
//
//        return savedProjectDTO;
//    }

    public Map<String, Object> saveProject(ProjectDTO projectDTO, MultipartFile file) throws IOException {

        String imageUrl = uploadImage(file);

        Project projectEntity = projectAssembler.toEntity(projectDTO);
        projectEntity.setImage(imageUrl);

        Project savedProject = repository.save(projectEntity);
        ProjectDTO savedProjectDTO = projectAssembler.toDTO(savedProject);

        Map<String, Object> data = new HashMap<>();
        data.put("savedProjectDTO", savedProjectDTO);
        data.put("imageUrl", imageUrl);

        return data;
    }

    public String uploadImage(MultipartFile file) throws IOException {
        return cloudinary.uploader()
                .upload(file.getBytes(),
                        Map.of("public_id", UUID.randomUUID().toString())
                )
                .get("url").toString();
    }


    public Optional<ProjectDTO> updateProject(Long id, ProjectDTO projectDTO) {

        Project projectExists = repository.findById(id).orElseThrow(() -> new RuntimeException());

        Project projectEntity = projectAssembler.toEntity(projectDTO);

        projectExists.setTitulo(projectEntity.getTitulo());
        projectExists.setDescricao(projectEntity.getDescricao());
        projectExists.setTags(projectEntity.getTags());
        projectExists.setLinks(projectEntity.getLinks());
        projectExists.setImage(projectEntity.getImage());
        projectEntity.setUser(projectDTO.getUser());

        Project savedProject = repository.save(projectEntity);
        ProjectDTO savedProjectDTO = projectAssembler.toDTO(savedProject);

        return Optional.ofNullable(savedProjectDTO);
    }

    public Optional<Project> deleteProject(Long id) {
        Optional<Project> project = repository.findById(id);
        repository.deleteById(project.get().getId());
        return project;
    }
}
