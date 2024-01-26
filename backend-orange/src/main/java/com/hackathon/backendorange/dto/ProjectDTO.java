package com.hackathon.backendorange.dto;

import com.hackathon.backendorange.model.User;
import lombok.Data;

@Data
public class ProjectDTO {

    private String titulo;
    private String descricao;
    private String tags;
    private String links;
    private String image;
    private User user;
}
