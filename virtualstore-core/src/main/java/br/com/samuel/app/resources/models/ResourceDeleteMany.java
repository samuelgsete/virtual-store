package br.com.samuel.app.resources.models;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import br.com.samuel.app.models.ProductImage;

public abstract class ResourceDeleteMany<T, R> {
    
    @Autowired
    private R deleteMany;

    protected R  delete() { return deleteMany; }

    public abstract ResponseEntity<?> run(Set<ProductImage> images);
}