package br.com.samuel.app.usercases.departments;

import java.net.URI;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.samuel.app.models.Department;
import br.com.samuel.app.repository.DepartmentRepository;
import br.com.samuel.app.usercases.models.Create;

@Service
public class CreateDepartment extends Create<Department, DepartmentRepository> {

    public URI run(Department newDepartment) {
        var allCategories = newDepartment.getCategories();
        newDepartment.addAllCategories(allCategories);
        Department createdDepartment = getRepository().save(newDepartment);
        return ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdDepartment.getId()).toUri();
    }  
}