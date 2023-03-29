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
@Table(name = "colors")
public class Color extends EntityBase {     // Entidade Cor
    
    private String name;                    // Nome da cor
    private String hexCode;                 // Código hexadecimal da cor

    @JsonIgnore
    @OneToMany(mappedBy = "color", cascade = CascadeType.ALL)
    private Set<ProductVersion> productVersions = new HashSet<ProductVersion>();

    /*public void addProduct(ProductVersion productVersion) {
        productVersion.setColor(this);
        productVersions.add(productVersion);
    }*/
}