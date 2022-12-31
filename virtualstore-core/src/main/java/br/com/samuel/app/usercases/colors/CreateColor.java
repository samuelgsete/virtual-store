package br.com.samuel.app.usercases.colors;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.samuel.app.models.Color;
import br.com.samuel.app.repository.ColorRepository;
import br.com.samuel.app.usercases.models.Create;

@Service
public class CreateColor extends Create<Color, ColorRepository> {

    public URI run(Color newColor) {
        var createdColor = getRepository().save(newColor);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{code}")
            .buildAndExpand(createdColor.getId())
            .toUri();
    }
}