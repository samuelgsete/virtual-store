package br.com.samuel.app.resources.departments;

import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Category;
import br.com.samuel.app.resources.models.ResourceAddChild;
import br.com.samuel.app.usercases.departments.AddCategory;

@RestController
@RequestMapping("departments")
public class AddCategoryResource extends ResourceAddChild<Category, AddCategory> {

    @PostMapping("{id}/categories")
    public ResponseEntity<Set<Category>> run(@PathVariable Integer id, @RequestBody Category newCategory) {
        return add()
            .run(id, newCategory)
            .map(categories -> ResponseEntity.ok(categories))
            .orElse(ResponseEntity.notFound().build());
    } 
}