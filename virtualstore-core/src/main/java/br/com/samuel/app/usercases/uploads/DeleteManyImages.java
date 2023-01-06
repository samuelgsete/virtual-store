package br.com.samuel.app.usercases.uploads;

import java.io.IOException;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.ProductImage;

@Service
public class DeleteManyImages {

    @Autowired
    private DeleteImageOfCloud deleteOfCloud;

    public void run(Set<ProductImage> images) {
        for (ProductImage image : images) {
            try {
                deleteOfCloud.run(image.getRandomName());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}