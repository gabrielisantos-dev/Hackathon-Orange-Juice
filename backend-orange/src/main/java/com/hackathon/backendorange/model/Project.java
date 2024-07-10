package com.hackathon.backendorange.model;

import com.hackathon.backendorange.enums.TagsEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Entity
@Table
@Data
@NoArgsConstructor
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

    @Enumerated
    private TagsEnum tags;

    @NotBlank(message = "Adicione o link do repositório ou outros links para acessar seu projeto!")
    @Column
    private String links;

    @Column
    private String date;

    @Column
    private String image;

    @Column
    private String image_id;

    @Column
    private String image_originalName;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
