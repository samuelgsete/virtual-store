package br.com.samuel.app.models;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "products")
public class Product extends EntityBase {               // Entidade Produto

    private String code;                                // Código único do produto
    private String name;                                // Nome
    private String model;                               // Modelo
    private String line;                                // Linha ou grupo do qual o produto pertence
    private Integer warranty;                           // Garantia
    private Integer stock;                              // Estpqie
    private Integer soldUnits;                          // Unidades vendidas
    private Boolean freeDelivery;                       // Frete gratuito
    private Boolean justReleased;                       // Recem lançado
    private Integer ratingAverage;                      // Avaliação média
    private ProductCondition productCondition;          // Condição do produto
    private String contentPackaging;                    // Conteúdo da embalagem
    private Boolean isActive;                           // EstaAtivo
    private String eanCode;                             // Código EAN

    @Column(columnDefinition = "TEXT")
    private String details;                             // Detalhes

    @JoinColumn(name = "pricing_id")
    @OneToOne(cascade = CascadeType.ALL)
    private Pricing pricing;                            // Precificação

    @JoinColumn(name = "measurements_id")
    @OneToOne(cascade = CascadeType.ALL)
    private ProductMeasurements measurements;            // Medidas ou dimensões do produto

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;                                                       // Marca   
            
    @Column(name = "offered_at", columnDefinition = "TIMESTAMP")
    private LocalDateTime offeredAt = LocalDateTime.now();                      // Ofertado desde

    @Column(name = "updated_at", columnDefinition = "TIMESTAMP")
    private LocalDateTime updatedAt = LocalDateTime.now();                      // Atualizado em

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<ProductImage> images = new HashSet<ProductImage>();             // Imagens do produto

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<Specification> specifications = new HashSet<Specification>();   // Especificações
   
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;                                                  // Category

    @JoinTable(
        name = "product_colors",
        joinColumns = {@JoinColumn(name = "product_id")},
        inverseJoinColumns = {@JoinColumn(name = "color_id")}
    )
    @ManyToMany
    private Set<Color> colors = new HashSet<Color>();                           // Cores
    
    public void addImage(ProductImage newImage) {
        newImage.setProduct(this);
        this.images.add(newImage);
    }

    public void addAllImages(Set<ProductImage> images) {
        this.images = images.stream().map(productImage -> {
            productImage.setProduct(this);
            return productImage;
        }).collect(Collectors.toSet());
    }

    public void addAllSpecifications(Set<Specification> specifications) {
        this.specifications = specifications.stream().map(specification -> {
            specification.setProduct(this);
            return specification;
        }).collect(Collectors.toSet());
    }

    public void addAllColors(Set<Color> colors) {
        this.colors = colors.stream().map(color -> {
            color.addProduct(this);
            return color;
        }).collect(Collectors.toSet());
    }

    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Product that = (Product) o;
        return Objects.equals(code, that.code);
    }

    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((code == null) ? 0 : code.hashCode());
        return result;
    }
}