package br.com.samuel.app.usercases.departments;

import java.util.Optional;
import java.util.Set;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Category;
import br.com.samuel.app.models.Department;
import br.com.samuel.app.repository.DepartmentRepository;
import br.com.samuel.app.usercases.models.AddChild;

@Service
public class AddCategory extends AddChild<Category, DepartmentRepository> {

    public Optional<Set<Category>> run(Integer id, Category newCategory) {
        return getRepository()
            .findById(id)
            .map(department -> {
                department.addOneCategory(newCategory);
                Department updatedDepartment = getRepository().save(department);
                return updatedDepartment.getCategories();
            });
    }
}