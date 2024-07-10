package com.hackathon.backendorange.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class AutenticationDTO {

    private String email;
    private String password;

}