package com.hackathon.backendorange;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@ComponentScan
public class BackendOrangeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendOrangeApplication.class, args);
	}

	@Bean
	public Cloudinary cloudinary() {
		return new Cloudinary(ObjectUtils.asMap(
				"cloud_name", "ddxnneofl",
				"api_key", "345619857263526",
				"api_secret", "zNTB5KGuCuEGZUBxWb08-cXoO9A",
				"secure", true));
	}
}
