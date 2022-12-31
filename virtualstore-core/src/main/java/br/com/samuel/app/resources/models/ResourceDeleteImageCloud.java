package br.com.samuel.app.resources.models;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import br.com.samuel.app.usercases.uploads.DeleteImageOfCloud;

public abstract class ResourceDeleteImageCloud {
    
    @Autowired
    private DeleteImageOfCloud deleteImage;

    public DeleteImageOfCloud delete() { return deleteImage; }

    public abstract ResponseEntity<?> run(String nameImg) throws IOException;
}