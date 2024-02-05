package com.hackathon.backendorange.controller;


import com.hackathon.backendorange.dto.ProjectSaveDTO;
import com.hackathon.backendorange.enums.TagsEnum;
import com.hackathon.backendorange.exception.ProjectIdNotFoundException;
import com.hackathon.backendorange.exception.ProjectsNotFoundException;
import com.hackathon.backendorange.model.Project;
import com.hackathon.backendorange.service.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/project")
@Tag(name = "Projects")
public class ProjectController {
    @Autowired
    private ProjectService service;
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
            description = "Retorna uma lista dos projetos do usuário logado no sistema.",
            summary = "Listar todos os projetos do usuário",
            responses = {
                    @ApiResponse(
                            description = "Success",
                            responseCode = "200"
                    ),
                    @ApiResponse(
                            description = "Not Found Projects",
                            responseCode = "404"
                    ),
                    @ApiResponse(
                            description = "Usuário não possui credenciais de autenticação válidas",
                            responseCode = "401"
                    )
            }
    )
    @GetMapping("/list-userprojects")
    public ResponseEntity listUserProject() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        try{
            if(authentication != null && authentication.isAuthenticated()) {
                UserDetails userDetails = (UserDetails) authentication.getPrincipal();
                List<Project> userProjects = service.getUserProjects(userDetails.getUsername());
                return ResponseEntity.ok(userProjects);
            }else{
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário não autenticado.");
            }
        }catch (ProjectsNotFoundException e) {
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
                    ),
                    @ApiResponse(
                            description = "Usuário não possui credenciais de autenticação válidas",
                            responseCode = "401"
                    )
            }
    )
    @PostMapping(value = "/save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @CrossOrigin(origins = "https://orange-hackathon-fcs3.onrender.com")
    public ResponseEntity<String> save(@RequestPart @Valid ProjectSaveDTO projectSaveDTO,
                                       @RequestPart(required = false, name = "image")  MultipartFile file) throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        try {
            if (authentication != null && authentication.isAuthenticated()) {
                UserDetails userDetails = (UserDetails) authentication.getPrincipal();
                service.saveProject(userDetails.getUsername(), projectSaveDTO, file);
                return ResponseEntity.ok("Projeto registrado com sucesso!");
            }else{
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário não autenticado.");
            }

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(e.getMessage());
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
    @CrossOrigin(origins = "https://orange-hackathon-fcs3.onrender.com")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestPart @Valid ProjectSaveDTO projectSaveDTO,
                                         @RequestPart(required = false, name = "image") MultipartFile file) throws IOException {
        try {
            service.updateProject(id, projectSaveDTO, file);
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
    @CrossOrigin(origins = "https://orange-hackathon-fcs3.onrender.com")
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


    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException e){
        Map<String, String> errors = new HashMap<>();
        e.getBindingResult().getAllErrors().forEach((error) -> {
            String errorMessage = error.getDefaultMessage();
            errors.put("Erro de validação ", errorMessage);
        });

        return errors;
    }
}
