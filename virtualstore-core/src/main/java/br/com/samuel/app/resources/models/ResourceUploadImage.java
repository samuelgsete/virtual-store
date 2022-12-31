package br.com.samuel.app.resources.models;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import br.com.samuel.app.models.ProductImage;
import br.com.samuel.app.usercases.uploads.UploadImage;

public abstract class ResourceUploadImage {

    @Autowired
    private UploadImage upload;

    public UploadImage upload() { return upload; }

    public abstract ResponseEntity<ProductImage> run(MultipartFile img) throws IOException;
    
}