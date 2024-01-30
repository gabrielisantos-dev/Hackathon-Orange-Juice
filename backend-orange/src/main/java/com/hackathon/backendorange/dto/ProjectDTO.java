package com.hackathon.backendorange.dto;

import com.hackathon.backendorange.model.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectDTO {

    private String titulo;
    private String descricao;
    private String tags;
    private String links;
    private String image;
    private String image_id;
    private Long idUser;

}
