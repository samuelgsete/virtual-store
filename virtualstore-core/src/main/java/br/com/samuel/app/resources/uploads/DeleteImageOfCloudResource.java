package br.com.samuel.app.resources.uploads;

import java.io.IOException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.resources.models.ResourceDeleteImageCloud;

@RestController
@RequestMapping("uploads/images")
public class DeleteImageOfCloudResource extends ResourceDeleteImageCloud {
    
    @DeleteMapping("{nameImg}")
    public ResponseEntity<?> run(@PathVariable String nameImg) throws IOException {
        delete().run(nameImg);
        return ResponseEntity.ok().build();
    }
}