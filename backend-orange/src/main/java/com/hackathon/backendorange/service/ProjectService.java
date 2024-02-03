package com.hackathon.backendorange.service;

import com.cloudinary.Cloudinary;
import com.hackathon.backendorange.controller.assembler.ProjectAssembler;
import com.hackathon.backendorange.dto.ProjectDTO;
import com.hackathon.backendorange.dto.ProjectSaveDTO;
import com.hackathon.backendorange.enums.TagsEnum;
import com.hackathon.backendorange.exception.ProjectIdNotFoundException;
import com.hackathon.backendorange.exception.ProjectsNotFoundException;
import com.hackathon.backendorange.model.Project;
import com.hackathon.backendorange.model.User;
import com.hackathon.backendorange.repository.ProjectRepository;
import com.hackathon.backendorange.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class ProjectService {
    ProjectRepository repository;
    UserRepository userRepository;
    ProjectAssembler projectAssembler;

    Cloudinary cloudinary;

    public ProjectService(ProjectRepository repository,
                          UserRepository userRepository,
                          ProjectAssembler projectAssembler,
                          Cloudinary cloudinary) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.projectAssembler = projectAssembler;
        this.cloudinary = cloudinary;
    }

    public List<Project> getAllProjects() {
        List<Project> allProjects = repository.findAll();
        if (allProjects.isEmpty()) {
            throw new ProjectsNotFoundException();
        } else {
            return allProjects;
        }
    }

    public List<Project> getUserProjects(String email) {
        User user = userRepository.findUserByEmail(email);
        List<Project> userProjects = repository.getUserProjects(user.getId());
        if (userProjects.isEmpty()) {
            throw new ProjectsNotFoundException();
        } else {
            return userProjects;
        }
    }

    public ProjectDTO saveProject(String email, ProjectSaveDTO projectSaveDTO, MultipartFile file) throws IOException {

        if (projectSaveDTO != null) {
            User user = userRepository.findUserByEmail(email);

            Map imageInfo = uploadImage(file);
            String imageUrl = imageInfo.get("url").toString();
            String imageId = imageInfo.get("public_id").toString();

            ProjectDTO projectDTO = new ProjectDTO();
            projectDTO.setTitulo(projectSaveDTO.getTitulo());
            projectDTO.setDescricao(projectSaveDTO.getDescricao());
            projectDTO.setTags(projectSaveDTO.getTags());
            projectDTO.setLinks(projectSaveDTO.getLinks());

            Project projectEntity = projectAssembler.toEntity(projectDTO);

            projectEntity.setDate(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
            projectEntity.setImage(imageUrl);
            projectEntity.setImage_id(imageId);
            projectEntity.setImage_originalName(file.getOriginalFilename());
            projectEntity.setUser(user);

            Project savedProject = repository.save(projectEntity);
            ProjectDTO savedProjectDTO = projectAssembler.toDTO(savedProject);

            return savedProjectDTO;

        } else {
            throw new IllegalArgumentException("Dados fornecidos incorretamente ou não fornecido dados obrigatórios!");
        }
    }

    public Optional<ProjectDTO> updateProject(Long id, ProjectSaveDTO projectSaveDTO, MultipartFile file) throws IOException {

        if (projectSaveDTO != null && id != null) {
            Project projectExists = repository.findById(id).orElseThrow(() -> new ProjectIdNotFoundException());
            projectExists.setTitulo(projectSaveDTO.getTitulo());
            projectExists.setDescricao(projectSaveDTO.getDescricao());
            projectExists.setTags(projectSaveDTO.getTags());
            projectExists.setLinks(projectSaveDTO.getLinks());

            if (!Objects.equals(projectExists.getImage_originalName(), file.getOriginalFilename())) {
                //delete -> imagem antiga
                String imageIdExists = projectExists.getImage_id();
                deleteImage(imageIdExists);

                //upload -> imagem nova
                Map imageInfo = uploadImage(file);
                String imageUrl = imageInfo.get("url").toString();
                String image_id = imageInfo.get("public_id").toString();

                projectExists.setImage(imageUrl);
                projectExists.setImage_id(image_id);
                projectExists.setImage_originalName(file.getOriginalFilename());
            }


            Project savedProject = repository.save(projectExists);
            ProjectDTO savedProjectDTO = projectAssembler.toDTO(savedProject);

            return Optional.ofNullable(savedProjectDTO);
        } else {
            throw new IllegalArgumentException("Dados fornecidos incorretamente ou não fornecido dados obrigatórios!");
        }
    }

    public void deleteProject(Long id) throws IOException {
        Project projectExists = repository.findById(id).orElseThrow(() -> new ProjectIdNotFoundException());

        String image_id = projectExists.getImage_id();
        deleteImage(image_id);

        repository.deleteById(projectExists.getId());
    }

    //Armazenamento de Imagem -> Cloudinary
    public Map uploadImage(MultipartFile file) throws IOException {
        return cloudinary.uploader()
                .upload(file.getBytes(),
                        Map.of("public_id", UUID.randomUUID().toString()));
    }

    public void deleteImage(String image_id) throws IOException {
        cloudinary.uploader().destroy(image_id, Map.of());
    }

    //Buscar por Tags
    public List<Project> searchByTags(TagsEnum tags) {
        List<Project> projects = repository.findAll();

        List<Project> projectsByTag = projects.stream()
                .filter(Objects::nonNull)
                .filter(project -> project.getTags().equals(tags)).toList();

        if (projectsByTag.isEmpty()) {
            throw new ProjectsNotFoundException();
        } else {
            return projectsByTag;
        }
    }
}
