package br.com.samuel.app.models;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "brands")
public class Brand extends EntityBase {     // Marca do produto

    private String name;                    // Nome da marca
    private String website;                 // Web site da marca
    private String urlLogo;                 // Url do logo tipo da imagem

    @JsonIgnore
    @OneToMany(mappedBy = "brand", cascade = CascadeType.ALL)
    private Set<Product> products = new HashSet<Product>();

    public void addProduct(Product product) {
        product.setBrand(this);
        products.add(product);
    }
}