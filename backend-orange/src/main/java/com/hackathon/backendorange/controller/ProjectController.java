package com.hackathon.backendorange.controller;


import com.hackathon.backendorange.dto.ProjectDTO;
import com.hackathon.backendorange.exception.ProjectsNotFoundException;
import com.hackathon.backendorange.model.Project;
import com.hackathon.backendorange.service.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/project")
public class ProjectController {

    private ProjectService service;

    public ProjectController(ProjectService service) {
        this.service = service;
    }

    @GetMapping("/list")
    public ResponseEntity<Optional<List<Project>>> list() {
        Optional<List<Project>> allProjects = service.getAllProjects();
        return ResponseEntity.ok(allProjects);
    }

    @GetMapping("/list-userprojects/{id}")
    public ResponseEntity<List<Project>> listUserProject(@PathVariable Long id) {

        if(service.getUserProjects(id).isEmpty()){
            throw new ProjectsNotFoundException();
        }else{
            List<Project> userProjects = service.getUserProjects(id);
            return ResponseEntity.ok(userProjects);
        }
    }

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestPart("projectDTO") ProjectDTO newProjectDTO,
                                                    @RequestPart("image") MultipartFile file) throws IOException {
        try {
            service.saveProject(newProjectDTO, file);
            return ResponseEntity.ok("Projeto registrado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }

    }


    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestPart ProjectDTO updateProjectDTO,
                                                       @RequestPart("image") MultipartFile file) throws IOException {
        try {
            service.updateProject(id, updateProjectDTO, file);
            return ResponseEntity.ok("Projeto atualizado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws IOException {
        try {
            service.deleteProject(id);
            return ResponseEntity.ok("Projeto deletado com sucesso!");
        }  catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
