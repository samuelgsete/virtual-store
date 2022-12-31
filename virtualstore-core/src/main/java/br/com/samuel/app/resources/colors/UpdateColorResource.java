package br.com.samuel.app.resources.colors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Color;
import br.com.samuel.app.resources.models.ResourceUpdate;
import br.com.samuel.app.usercases.colors.UpdateColor;

@RestController
@RequestMapping("colors")
public class UpdateColorResource extends ResourceUpdate<Color, UpdateColor> {

    @PutMapping("/{id}")
    public ResponseEntity<Color> run(@PathVariable Integer id, @RequestBody Color color) {
        return update()
            .run(id, color)
            .map(updatedColor -> ResponseEntity.ok(updatedColor))
            .orElse(ResponseEntity.notFound().build());
    }
}