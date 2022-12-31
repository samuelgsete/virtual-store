package br.com.samuel.app.models;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "colors")
public class Color extends EntityBase {     // Entidade Cor
    
    private String name;                    // Nome da cor
    private String hexCode;                 // Código hexadecimal da cor

    @JsonIgnore
    @ManyToMany(mappedBy = "colors")
    private Set<Product> products = new HashSet<Product>();

    public void addProduct(Product product) {
        products.add(product);
        product.getColors().add(this);
    }

    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Color that = (Color) o;
        return Objects.equals(hexCode, that.hexCode);
    }

    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((hexCode == null) ? 0 : hexCode.hashCode());
        return result;
    }
}