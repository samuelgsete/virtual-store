package br.com.samuel.app.resources.products;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Product;
import br.com.samuel.app.resources.models.ResourceFindByUniqueCode;
import br.com.samuel.app.usercases.products.FindProductByUniqueCode;

@RestController
@RequestMapping("products")
public class FindProductByUniqueCodeResource extends ResourceFindByUniqueCode<Product, FindProductByUniqueCode> {

    @GetMapping("{code}")
    public ResponseEntity<Product> run(@PathVariable String code) {
        return find()
            .run(code)
            .map(foundProduct -> ResponseEntity.ok(foundProduct))
            .orElse(ResponseEntity.notFound().build());
    }   
}