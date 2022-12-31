package br.com.samuel.app.usercases.colors;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Color;
import br.com.samuel.app.repository.ColorRepository;
import br.com.samuel.app.usercases.models.Update;

@Service
public class UpdateColor extends Update<Color, ColorRepository> {

    public Optional<Color> run(Integer id, Color color) {
        return getRepository()
            .findById(id)
            .map(unupdatedColor -> {
                unupdatedColor.setName(color.getName());
                unupdatedColor.setHexCode(color.getHexCode());
                var updatedColor = getRepository().save(unupdatedColor);
                return updatedColor;
            });
    }
}