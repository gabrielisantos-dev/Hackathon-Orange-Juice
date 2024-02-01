package com.hackathon.backendorange.controller;


import com.hackathon.backendorange.dto.ProjectDTO;
import com.hackathon.backendorange.enums.TagsEnum;
import com.hackathon.backendorange.exception.ProjectIdNotFoundException;
import com.hackathon.backendorange.exception.ProjectsNotFoundException;
import com.hackathon.backendorange.exception.UserNotFoundException;
import com.hackathon.backendorange.model.Project;
import com.hackathon.backendorange.service.ProjectService;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/project")
@Tag(name = "Projetos")
public class ProjectController {

    private ProjectService service;

    public ProjectController(ProjectService service) {
        this.service = service;
    }

    @Operation(
            description = "Retorna uma lista de todos os projetos registrados no sistema.",
            summary = "Listar todos os projetos",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "Not Found Projects",
                            responseCode = "404"
                    )
            }
    )
    @GetMapping("list")
    public ResponseEntity list() {
        try{
            List<Project> allProjects = service.getAllProjects();
            return ResponseEntity.ok(allProjects);
        }catch (ProjectsNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());

        }
    }

    @Operation(
            description = "Retorna uma lista dos projetos a partir do id do usuário.",
            summary = "Listar todos os projetos do usuário",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "Not Found Projects / Not Found User",
                            responseCode = "404"
                    )
            }
    )
    @GetMapping("/list-userprojects/{id}")
    public ResponseEntity listUserProject(@PathVariable Long id) {
        try{
            List<Project> userProjects = service.getUserProjects(id);
            return ResponseEntity.ok(userProjects);
        }catch (ProjectsNotFoundException | UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @Operation(
            description = "Permite que o usuário logado registre novos projetos no sistema.",
            summary = "Salvar projetos do usuário",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "Not Found User",
                            responseCode = "404"
                    ),
                    @ApiResponse(
                            description = "Dados não preenchidos corretamente",
                            responseCode = "422"
                    )
            }
    )
    @PostMapping(value = "/save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> save(@RequestPart("projectDTO") ProjectDTO newProjectDTO,
                                       @RequestPart("image")  MultipartFile file) throws IOException {
        try {
            service.saveProject(newProjectDTO, file);
            return ResponseEntity.ok("Projeto registrado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(e.getMessage());
        } catch (UserNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }

    }


    @Operation(
            description = "Atualiza os detalhes do projeto a partir do seu id.",
            summary = "Atualizar projeto",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "Not Found Project",
                            responseCode = "404"
                    ),
                    @ApiResponse(
                            description = "Dados não preenchidos corretamente",
                            responseCode = "422"
                    )
            }
    )
    @PutMapping(value = "/update/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> update(@PathVariable Long id, @RequestPart ProjectDTO updateProjectDTO,
                                         @RequestPart("image") MultipartFile file) throws IOException {
        try {
            service.updateProject(id, updateProjectDTO, file);
            return ResponseEntity.ok("Projeto atualizado com sucesso!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(e.getMessage());
        } catch (ProjectIdNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @Operation(
            description = "Deleta o projeto a partir do seu id.",
            summary = "Deletar projeto",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "Not Found Project",
                            responseCode = "404"
                    )
            }
    )
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws IOException {
        try {
            service.deleteProject(id);
            return ResponseEntity.ok("Projeto deletado com sucesso!");
        } catch (ProjectIdNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @Operation(
            description = "Retorna uma lista de projetos que possuem a tag determinada nos parâmetro de consulta.",
            summary = "Listar projetos a partir de uma tag",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "Not Found Project",
                            responseCode = "404"
                    )
            }
    )
    @GetMapping("/search-projects")
    public ResponseEntity searchProjects(@RequestParam TagsEnum tags){
        try{
            List<Project> projectsByTag = service.searchByTags(tags);
            return ResponseEntity.ok(projectsByTag);
        }catch (ProjectsNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}