package com.hackathon.backendorange.model;

import com.hackathon.backendorange.enums.TagsEnum;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table
@Data
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String titulo;

    @Column
    private String descricao;

    @Enumerated
    private TagsEnum tags;

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
