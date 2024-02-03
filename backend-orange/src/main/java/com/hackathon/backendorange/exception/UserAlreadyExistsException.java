package com.hackathon.backendorange.exception;


public class UserAlreadyExistsException extends RuntimeException {


    public UserAlreadyExistsException() {
        super("Usuário já existe");
    }
}