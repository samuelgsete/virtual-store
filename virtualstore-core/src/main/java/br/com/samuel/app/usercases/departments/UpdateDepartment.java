package br.com.samuel.app.usercases.departments;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Department;
import br.com.samuel.app.repository.DepartmentRepository;
import br.com.samuel.app.usercases.models.Update;

@Service
public class UpdateDepartment extends Update<Department, DepartmentRepository> {

    public Optional<Department> run(Integer id, Department department) {
        return getRepository()
            .findById(id)
            .map(unUpdatedDepartment -> {
                unUpdatedDepartment.setName(department.getName());
                unUpdatedDepartment.setCategories(department.getCategories());
                Department updatedDepartment = getRepository().save(department);
                return updatedDepartment;
            });
    } 
}