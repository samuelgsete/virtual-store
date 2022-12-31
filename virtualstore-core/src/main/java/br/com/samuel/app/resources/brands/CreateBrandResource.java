package br.com.samuel.app.resources.brands;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Brand;
import br.com.samuel.app.resources.models.ResourceCreate;
import br.com.samuel.app.usercases.brands.CreateBrand;

@RestController
@RequestMapping("brands")
public class CreateBrandResource extends ResourceCreate<Brand, CreateBrand> {

    @PostMapping
    public ResponseEntity<Object> run(@RequestBody Brand newBrand) {
        return ResponseEntity.created(create().run(newBrand)).build();
    }
}