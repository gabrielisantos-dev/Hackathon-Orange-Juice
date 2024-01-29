package com.hackathon.backendorange.dto;

import com.hackathon.backendorange.enums.TagsEnum;
import com.hackathon.backendorange.model.User;
import lombok.Data;

@Data
public class ProjectDTO {

    private String titulo;
    private String descricao;
    private TagsEnum tags;
    private String links;
    private String date;
    private String image;
    private String image_id;
    private String image_originalName;
    private User user;
}
