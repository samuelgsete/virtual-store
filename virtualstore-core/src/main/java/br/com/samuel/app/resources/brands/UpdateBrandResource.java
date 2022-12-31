package br.com.samuel.app.resources.brands;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Brand;
import br.com.samuel.app.resources.models.ResourceUpdate;
import br.com.samuel.app.usercases.brands.UpdateBrand;

@RestController
@RequestMapping("brands")
public class UpdateBrandResource extends ResourceUpdate<Brand, UpdateBrand> {

    @PutMapping("{id}")
    public ResponseEntity<Brand> run(@PathVariable Integer id, @RequestBody Brand createdBrand) {
        return update()
            .run(id, createdBrand)
            .map(updatedBrand -> ResponseEntity.ok(updatedBrand))
            .orElse(ResponseEntity.badRequest().build());
    } 
}