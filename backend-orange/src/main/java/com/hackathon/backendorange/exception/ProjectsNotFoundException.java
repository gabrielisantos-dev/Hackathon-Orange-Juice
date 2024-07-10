package com.hackathon.backendorange.exception;

public class ProjectsNotFoundException extends RuntimeException{

    public ProjectsNotFoundException(){
        super("Nenhum projeto foi encontrado!");
    }
}
