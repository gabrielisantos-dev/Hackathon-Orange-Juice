package com.hackathon.backendorange.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table
@Data
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;

    @Lob
    private byte[] imgByte;

    public Image() {
    }
    public Image(String name, String type, byte[] imgByte) {
        this.name = name;
        this.type = type;
        this.imgByte = imgByte;
    }
}
