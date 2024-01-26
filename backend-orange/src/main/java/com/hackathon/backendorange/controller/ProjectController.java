package com.hackathon.backendorange.controller;


import com.hackathon.backendorange.dto.ProjectDTO;
import com.hackathon.backendorange.model.Project;
import com.hackathon.backendorange.service.ProjectService;
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

    @GetMapping("list")
    public ResponseEntity<Optional<List<Project>>> list() {
        Optional<List<Project>> allProjects = service.getAllProjects();
        return ResponseEntity.ok(allProjects);
    }

    @GetMapping("/list-userprojects/{id}")
    public ResponseEntity<Optional<List<Project>>> listUserProject(@PathVariable Long id) {
        try {
            Optional<List<Project>> userProjects = service.getUserProjects(id);
            return ResponseEntity.ok(userProjects);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

//    @PostMapping("/save")
//    public ResponseEntity<ProjectDTO> save(@RequestBody ProjectDTO newProjectDTO){
//        try{
//            service.saveProject(newProjectDTO);
//            return ResponseEntity.ok(newProjectDTO);
//        }catch (RuntimeException e) {
//            return ResponseEntity.badRequest().build();
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().build();
//        }
//    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@RequestPart("projectDTO") ProjectDTO newProjectDTO,
                                                    @RequestPart("image") MultipartFile file) throws IOException {
        try {
            Map<String, Object> data = service.saveProject(newProjectDTO, file);
            return ResponseEntity.ok(data);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }

    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Optional<ProjectDTO>> update(@PathVariable Long id, @RequestBody ProjectDTO updateProjectDTO) {
        try {
            Optional<ProjectDTO> projectDTO = service.updateProject(id, updateProjectDTO);
            return ResponseEntity.ok(projectDTO);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Optional<Project>> delete(@PathVariable Long id) {
        try {
            Optional<Project> project = service.deleteProject(id);
            return ResponseEntity.ok(project);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
