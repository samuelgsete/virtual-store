package br.com.samuel.app.resources.departments;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Category;
import br.com.samuel.app.resources.models.ResourceUpdate;
import br.com.samuel.app.usercases.departments.UpdateCategory;

@RestController
@RequestMapping("categories")
public class UpdateCategoryResource extends ResourceUpdate<Category, UpdateCategory> {

    @PutMapping("{id}")
    public ResponseEntity<Category> run(@PathVariable Integer id, @RequestBody Category category) {
        return update()
            .run(id, category)
            .map(updatedCategory -> ResponseEntity.ok(updatedCategory))
            .orElse(ResponseEntity.notFound().build());
    }
}