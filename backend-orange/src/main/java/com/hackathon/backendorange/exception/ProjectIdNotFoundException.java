package com.hackathon.backendorange.exception;

public class ProjectIdNotFoundException extends RuntimeException{

    public ProjectIdNotFoundException(){
        super("O projeto não foi encontrado!");
    }
}
