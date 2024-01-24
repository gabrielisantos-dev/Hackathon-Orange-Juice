package com.hackathon.backendorange.service;

import com.hackathon.backendorange.model.Project;
import com.hackathon.backendorange.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    private ProjectRepository repository;

    public ProjectService(ProjectRepository repository) {
        this.repository = repository;
    }

    public List<Project> getAllProjects(){
        return repository.findAll();
    }

    public Optional<Project> getAllUserProject(Long user_id){
        return repository.getUserProjects(user_id);
    }

    public Project saveProject(Project project){
        return repository.save(project);
    }

    public Project updateProject(Long id, Project project){
        Project projectExists = repository.findById(id).orElseThrow(() -> new RuntimeException());
        projectExists.setTitulo(project.getTitulo());
        projectExists.setDescricao(project.getDescricao());
        projectExists.setTags(project.getTags());
        projectExists.setLinks(project.getLinks());
        projectExists.setImagem(project.getImagem());

        return repository.save(projectExists);
    }

    public void deleteProject(Long id) {
        Project projectExists = repository.findById(id).orElseThrow(() -> new RuntimeException());
        repository.deleteById(projectExists.getId());
    }
}
