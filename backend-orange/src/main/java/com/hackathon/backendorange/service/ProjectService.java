package com.hackathon.backendorange.service;

import com.cloudinary.Cloudinary;
import com.hackathon.backendorange.controller.assembler.ProjectAssembler;
import com.hackathon.backendorange.dto.ProjectDTO;
import com.hackathon.backendorange.model.Project;
import com.hackathon.backendorange.model.User;
import com.hackathon.backendorange.repository.ProjectRepository;
import com.hackathon.backendorange.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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

    public ProjectDTO saveProject(ProjectDTO projectDTO, MultipartFile file) throws IOException {

        Map imageInfo = uploadImage(file);
        String imageUrl = imageInfo.get("url").toString();
        String imageId = imageInfo.get("public_id").toString();

        Project projectEntity = projectAssembler.toEntity(projectDTO);
        projectEntity.setImage(imageUrl);
        projectEntity.setImage_id(imageId);

        Project savedProject = repository.save(projectEntity);
        ProjectDTO savedProjectDTO = projectAssembler.toDTO(savedProject);

        return savedProjectDTO;
    }

    public Optional<ProjectDTO> updateProject(Long id, ProjectDTO projectDTO, MultipartFile file) throws IOException {

        Project projectExists = repository.findById(id).orElseThrow(() -> new RuntimeException());

        projectExists.setTitulo(projectDTO.getTitulo());
        projectExists.setDescricao(projectDTO.getDescricao());
        projectExists.setTags(projectDTO.getTags());
        projectExists.setLinks(projectDTO.getLinks());
        projectExists.setUser(projectDTO.getUser());

        //delete -> imagem antiga
        String imageIdExists = projectDTO.getImage_id();
        deleteImage(imageIdExists);

        //upload -> imagem nova
        Map imageInfo = uploadImage(file);
        String imageUrl = imageInfo.get("url").toString();
        String image_id = imageInfo.get("public_id").toString();

        projectExists.setImage(imageUrl);
        projectExists.setImage_id(image_id);

        Project savedProject = repository.save(projectExists);
        ProjectDTO savedProjectDTO = projectAssembler.toDTO(savedProject);

        return Optional.ofNullable(savedProjectDTO);
    }

    public Optional<Project> deleteProject(Long id) throws IOException {

        Optional<Project> project = repository.findById(id);

        String image_id = project.get().getImage_id();
        deleteImage(image_id);

        repository.deleteById(project.get().getId());
        return project;
    }

    //Armazenamento de Imagem -> Cloudinary
    public Map uploadImage(MultipartFile file) throws IOException {
        return cloudinary.uploader()
                .upload(file.getBytes(),
                        Map.of("public_id", UUID.randomUUID().toString()));
    }

    public void deleteImage(String image_id) throws IOException{
        cloudinary.uploader().destroy(image_id, Map.of());
    }
}
