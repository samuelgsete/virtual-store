package br.com.samuel.app.resources.departments;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Department;
import br.com.samuel.app.resources.models.ResourceCreate;
import br.com.samuel.app.usercases.departments.CreateDepartment;

@RestController
@RequestMapping("departments")
public class CreateDepartmentResource extends ResourceCreate<Department, CreateDepartment> {

    @PostMapping
    public ResponseEntity<Object> run(@RequestBody Department newDepartment) {
        return ResponseEntity.created(create().run(newDepartment)).build();
    }
}