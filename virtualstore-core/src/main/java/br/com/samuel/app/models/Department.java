package br.com.samuel.app.models;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "departments")
public class Department extends EntityBase {                        // Departamentos
    
    private String name;                                            // Nome do departamento

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private Set<Category> categories = new HashSet<Category>();     // Categorias do departamento

    public void addOneCategory(Category category) {
        category.setDepartment(this);
        this.categories.add(category);
    }

    public void addAllCategories(Set<Category> allCategories) {
        this.categories = allCategories.stream().map(category -> {
            category.setDepartment(this);
            System.out.println(category.getName());
            return category;
        }).collect(Collectors.toSet());
    }
}