package com.hackathon.backendorange.controller;


import com.hackathon.backendorange.model.Image;
import com.hackathon.backendorange.model.Project;
import com.hackathon.backendorange.service.ProjectService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/project")
public class ProjectController {

    private ProjectService service;

    public ProjectController(ProjectService service) {
        this.service = service;
    }

    @GetMapping("list")
    public ResponseEntity<Optional<List<Project>>> list(){
        Optional<List<Project>> allProjects = service.getAllProjects();
        return ResponseEntity.ok(allProjects);
    }

    @GetMapping("/list-userprojects/{id}")
    public ResponseEntity<Optional<List<Project>>> listUserProject(@PathVariable Long id){
        try{
            Optional<List<Project>> userProjects = service.getUserProjects(id);
            return ResponseEntity.ok(userProjects);
        }catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping(value = {"/save"}, consumes =
            {MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public ResponseEntity<Project> save(@RequestPart("project") Project newProject,
                                        @RequestPart("image")MultipartFile file) throws IOException {
        try{
            service.saveProject(newProject, file);
            return ResponseEntity.ok(newProject);
        }catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            System.out.println(e);
            return null;
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Optional<Project>> update(@PathVariable Long id, @RequestBody Project updateProject){
        try{
            Optional<Project> project = service.updateProject(id, updateProject);
            return ResponseEntity.ok(project);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Optional<Project>> delete(@PathVariable Long id) {
        try{
            Optional<Project> project = service.deleteProject(id);
            return ResponseEntity.ok(project);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
