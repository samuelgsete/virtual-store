package br.com.samuel.app.resources.products;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Product;
import br.com.samuel.app.resources.models.ResourceCreate;
import br.com.samuel.app.usercases.products.CreateProduct;

@RestController
@RequestMapping("products")
public class CreateProductResource extends ResourceCreate<Product, CreateProduct> {

    @PostMapping
    public ResponseEntity<Object> run(@RequestBody Product newProduct) {
        return ResponseEntity.created(create().run(newProduct)).build();
    }
}