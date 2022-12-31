package br.com.samuel.app.resources.uploads;

import java.io.IOException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.samuel.app.models.ProductImage;
import br.com.samuel.app.resources.models.ResourceUploadImage;

@RestController
@RequestMapping("uploads")
public class UploadImageResource extends ResourceUploadImage {
 
    @PostMapping("images")
    public ResponseEntity<ProductImage> run(@RequestParam MultipartFile img) throws IOException {
        return ResponseEntity.status(HttpStatus.CREATED).body(upload().run(img));
    }
}