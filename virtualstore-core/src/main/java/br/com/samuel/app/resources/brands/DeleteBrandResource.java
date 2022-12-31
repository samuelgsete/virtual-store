package br.com.samuel.app.resources.brands;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Brand;
import br.com.samuel.app.resources.models.ResourceDeleteOne;
import br.com.samuel.app.usercases.brands.DeleteBrand;

@RestController
@RequestMapping("brands")
public class DeleteBrandResource extends ResourceDeleteOne<Brand, DeleteBrand> {

    @DeleteMapping("{id}")
    public ResponseEntity<Brand> run(@PathVariable Integer id, @RequestBody Brand brand) {
        return ResponseEntity.ok().body(delete().run(id, brand));
    }
}