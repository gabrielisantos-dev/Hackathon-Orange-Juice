package com.hackathon.backendorange.exception;

public class ProjectsNotFoundException extends RuntimeException{

    public ProjectsNotFoundException(){
        super("O usuário ainda não registrou projetos!");
    }
}
