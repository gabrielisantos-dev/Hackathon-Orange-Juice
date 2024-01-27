package com.hackathon.backendorange.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table
@Data
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O título não pode estar em branco")
    @Column(nullable = false)
    private String titulo;

    @NotBlank(message = "Adicione uma descrição")
    @Size(max = 255, message = "A descrição não pode ultrapassar 255 caracteres")
    @Column(nullable = false)
    private String descricao;

    private String tags;

    @NotBlank(message = "Adicione o link do repositório")
    @Column(nullable = false)
    private String links;

    private String image;
    private String image_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
