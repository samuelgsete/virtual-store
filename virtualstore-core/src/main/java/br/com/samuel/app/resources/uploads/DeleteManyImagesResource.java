package br.com.samuel.app.resources.uploads;

import java.util.Set;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.ProductImage;
import br.com.samuel.app.resources.models.ResourceDeleteMany;
import br.com.samuel.app.usercases.uploads.DeleteManyImages;

@RestController
@RequestMapping("uploads/images")
public class DeleteManyImagesResource extends ResourceDeleteMany<ProductImage, DeleteManyImages> {
    
    @DeleteMapping("/all")
    public ResponseEntity<?> run(@RequestBody Set<ProductImage> images) {
        delete().run(images);
        return ResponseEntity.ok().build();
    }
}