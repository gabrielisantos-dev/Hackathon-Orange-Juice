package com.hackathon.backendorange.dto;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
public class ProjectDTO {

    private Long id;
    private String titulo;
    private String descricao;
    private String tags;
    private String links;

    @OneToOne
    private Long image_id;

    @ManyToOne
    private Long user_id;
}
