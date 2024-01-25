package com.hackathon.backendorange.service;

import com.hackathon.backendorange.dto.ProjectDTO;
import com.hackathon.backendorange.model.Image;
import com.hackathon.backendorange.model.Project;
import com.hackathon.backendorange.repository.ProjectRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private ProjectRepository repository;

    public ProjectService(ProjectRepository repository) {
        this.repository = repository;
    }

    public Optional<List<Project>> getAllProjects() {
        return Optional.ofNullable(repository.findAll());
    }

    public Optional<List<Project>> getUserProjects(Long user_id) {
        return Optional.ofNullable(repository.getUserProjects(user_id));
    }

    public Project saveProject(Project project, MultipartFile file) throws IOException {
        Image image = uploadImage(file);
        project.setImage(image);
        return repository.save(project);
    }

    public Image uploadImage(MultipartFile file) throws IOException {
        Image image = new Image(file.getOriginalFilename(),
                file.getContentType(),
                file.getBytes()
        );
        return image;
    }

    public Optional<Project> updateProject(Long id, Project project) {
        Project projectExists = repository.findById(id).orElseThrow(() -> new RuntimeException());
        projectExists.setTitulo(project.getTitulo());
        projectExists.setDescricao(project.getDescricao());
        projectExists.setTags(project.getTags());
        projectExists.setLinks(project.getLinks());
        projectExists.setImage(project.getImage());

        return Optional.ofNullable(repository.save(projectExists));
    }

    public Optional<Project> deleteProject(Long id) {
        Optional<Project> project = repository.findById(id);
        repository.deleteById(project.get().getId());
        return project;
    }
}
