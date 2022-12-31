package br.com.samuel.app.resources.colors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Color;
import br.com.samuel.app.resources.models.ResourceCreate;
import br.com.samuel.app.usercases.colors.CreateColor;

@RestController
@RequestMapping("colors")
public class CreateColorResource extends ResourceCreate<Color, CreateColor> {

    @PostMapping
    public ResponseEntity<Object> run(@RequestBody Color newColor) {
        return ResponseEntity.created(create().run(newColor)).build();
    }
}