package br.com.samuel.app.usercases.uploads;

import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Service
public class CreateUrlImage {
    
    public String run(String randomName) {
        return ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("img/uploads/")
                .path(randomName)
                .toUriString();
    }
}