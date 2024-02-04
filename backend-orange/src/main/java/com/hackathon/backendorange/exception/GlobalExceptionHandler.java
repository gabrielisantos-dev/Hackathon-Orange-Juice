package com.hackathon.backendorange.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(value = UserAlreadyExistsException.class)
    public ResponseEntity<String> userAlreadyExistsHandler(UserAlreadyExistsException exception) {
        return new ResponseEntity<>("{\"message\":\"Usuário já existe no sistema\"}", HttpStatus.CONFLICT);
    }
    @ExceptionHandler(value = UserNotFoundException.class)
    public ResponseEntity<String> userNotFoundHandler(UserNotFoundException exception) {
        return new ResponseEntity<>("{\"message\":\"Usuário não encontrado\"}", HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(value = LoginException.class)
    public ResponseEntity<String> loginExceptionHandler(LoginException exception) {
        return new ResponseEntity<>("{\"message\":\"Usuário ou senha inválidos\"}", HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(value = AuthenticationException.class)
    public ResponseEntity<String> passwordHandler(AuthenticationException exception){
     return new ResponseEntity<>("{\"message\":\"Usuário ou senha inválidos\"}", HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(value = RegisterException.class)
    public ResponseEntity<String> registerExceptionHandler (RegisterException exception){
        return new ResponseEntity<>("{\"message\":\"\"Senha inválida. Verifique se atende aos requisitos necessários.\"\"}",HttpStatus.UNPROCESSABLE_ENTITY);
    }
}
