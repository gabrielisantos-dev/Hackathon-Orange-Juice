package com.hackathon.backendorange.controller.assembler;

import com.hackathon.backendorange.dto.ProjectDTO;
import com.hackathon.backendorange.model.Project;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class ProjectAssembler {

    final ModelMapper modelMapper;

    public ProjectAssembler() {
        this.modelMapper = new ModelMapper();
    }

    public ProjectDTO toDTO (Project project) {
        return modelMapper.map(project, ProjectDTO.class);
    }

    public Project toEntity(ProjectDTO projectDTO) {
        return modelMapper.map(projectDTO, Project.class);
    }
}
