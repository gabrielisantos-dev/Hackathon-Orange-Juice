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

    @NotBlank(message = "O título não pode estar em branco!")
    @Column
    private String titulo;

    @NotBlank(message = "Adicione uma descrição sobre o projeto!")
    @Size(max = 255, message = "A descrição não pode ultrapassar 255 caracteres")
    @Column
    private String descricao;

    private String tags;

    @NotBlank(message = "Adicione o link do repositório ou outros links para acessar seu projeto!")
    @Column
    private String links;

    private String image;
    private String image_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
