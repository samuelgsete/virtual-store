package br.com.samuel.app.resources.departments;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Department;
import br.com.samuel.app.resources.models.ResourceUpdate;
import br.com.samuel.app.usercases.departments.UpdateDepartment;

@RestController
@RequestMapping("departments")
public class UpdateDepartmentResource extends ResourceUpdate<Department, UpdateDepartment> {

    @PutMapping("{id}")
    public ResponseEntity<Department> run(@PathVariable Integer id, @RequestBody Department department) {
        return update()
            .run(id, department)
            .map(updatedDepartment -> ResponseEntity.ok(updatedDepartment))
            .orElse(ResponseEntity.notFound().build());
    }
}