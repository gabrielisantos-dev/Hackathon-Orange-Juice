package com.hackathon.backendorange.dto;

import com.hackathon.backendorange.enums.TagsEnum;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProjectSaveDTO{
    @NotBlank(message = "O campo 'título' não pode estar em branco.")
    @Size(min = 4, max = 30, message = "O campo 'título' deve ter entre 4 e 30 caracteres")
    private String titulo;

    @NotBlank(message = "O campo 'descrição' não pode estar em branco.")
    @Size(min = 10, max = 255, message = "O campo 'descrição' deve ter entre 10 e 255 caracteres")
    private String descricao;

    private TagsEnum tags;

    @NotBlank(message = "O campo 'links' não pode estar em branco.")
    @Size(min = 10, max = 255, message = "O campo 'links' deve ter entre 10 e 255 caracteres")
    private String links;
}
