package br.com.samuel.app.models;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "product_images")
public class ProductImage extends EntityBase {

    private String randomName;
    private String originalName;
    private String url;
    private Integer width;
    private Integer height;
    private Boolean isMain = false;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;

    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ProductImage that = (ProductImage) o;
        return Objects.equals(randomName, that.randomName);
    }

    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((randomName == null) ? 0 : randomName.hashCode());
        return result;
    }
}