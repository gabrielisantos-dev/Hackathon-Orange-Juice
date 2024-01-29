package com.hackathon.backendorange.service;

import com.cloudinary.Cloudinary;
import com.hackathon.backendorange.controller.assembler.ProjectAssembler;
import com.hackathon.backendorange.dto.ProjectDTO;
import com.hackathon.backendorange.enums.TagsEnum;
import com.hackathon.backendorange.exception.ProjectIdNotFoundException;
import com.hackathon.backendorange.exception.UserNotFoundException;
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
import java.util.stream.Collectors;

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

    public List<Project> getUserProjects(Long user_id) {
        Optional<User> user = userRepository.findById(user_id);

        if (user.isPresent()) {
            User userExists = user.get();
            return repository.getUserProjects(userExists.getId());
        } else {
            throw new UserNotFoundException();
        }
    }

    public ProjectDTO saveProject(ProjectDTO projectDTO, MultipartFile file) throws IOException {

        if (projectDTO != null && projectDTO.getUser().getId() != null) {
            User user =
                    userRepository.findById(projectDTO.getUser().getId()).orElseThrow(() ->
                            new UserNotFoundException());

            Map imageInfo = uploadImage(file);
            String imageUrl = imageInfo.get("url").toString();
            String imageId = imageInfo.get("public_id").toString();

            Project projectEntity = projectAssembler.toEntity(projectDTO);

            projectEntity.setDate(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
            projectEntity.setImage(imageUrl);
            projectEntity.setImage_id(imageId);
            projectEntity.setImage_originalName(file.getOriginalFilename());

            Project savedProject = repository.save(projectEntity);
            ProjectDTO savedProjectDTO = projectAssembler.toDTO(savedProject);

            return savedProjectDTO;

        } else {
            throw new IllegalArgumentException("Projeto ou usuário não fornecidos corretamente!");
        }
    }

    public Optional<ProjectDTO> updateProject(Long id, ProjectDTO projectDTO, MultipartFile file) throws IOException {
        if (projectDTO != null && projectDTO.getUser().getId() != null && id != null) {
            User user = userRepository.findById(projectDTO.getUser().getId()).orElseThrow(() ->
                    new UserNotFoundException());
            Project projectExists = repository.findById(id).orElseThrow(() -> new ProjectIdNotFoundException());

            projectExists.setTitulo(projectDTO.getTitulo());
            projectExists.setDescricao(projectDTO.getDescricao());
            projectExists.setTags(projectDTO.getTags());
            projectExists.setLinks(projectDTO.getLinks());

            if (!Objects.equals(projectExists.getImage_originalName(), file.getOriginalFilename())){
                //delete -> imagem antiga
                String imageIdExists = projectDTO.getImage_id();
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
            throw new IllegalArgumentException("Projeto ou usuário não fornecidos corretamente!");
        }
    }

    public Project deleteProject(Long id) throws IOException {
        if (id != null) {
            Project projectExists = repository.findById(id).orElseThrow(() -> new ProjectIdNotFoundException());

            String image_id = projectExists.getImage_id();
            deleteImage(image_id);

            repository.deleteById(projectExists.getId());

            return projectExists;
        }else {
            throw new IllegalArgumentException("Projeto fornecido corretamente!");
        }
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
    public List<Project> searchByTags(TagsEnum tags){
        List<Project> projects = repository.findAll();

        return projects.stream()
                .filter(Objects::nonNull)
                .filter(project -> project.getTags().equals(tags))
                .collect(Collectors.toList());

    }
}
