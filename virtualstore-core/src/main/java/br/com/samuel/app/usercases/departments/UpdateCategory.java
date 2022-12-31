package br.com.samuel.app.usercases.departments;

import java.util.Optional;
import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Category;
import br.com.samuel.app.repository.CategoryRepository;
import br.com.samuel.app.usercases.models.Update;

@Service
public class UpdateCategory extends Update<Category, CategoryRepository> {

    public Optional<Category> run(Integer id, Category category) {
        return getRepository()
            .findById(id)
            .map(unUpdetedCategory -> {
                unUpdetedCategory.setName(category.getName());
                var updatedCategory = getRepository().save(unUpdetedCategory);
                return updatedCategory;
            });
    }
}