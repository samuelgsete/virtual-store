package br.com.samuel.app.models;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.OrderBy;
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
    private Integer soldUnits;                          // Unidades vendidas
    private Boolean freeDelivery;                       // Frete gratuito
    private Boolean justReleased;                       // Recem lançado
    private Integer ratingAverage;                      // Avaliação média
    private Integer numberOfRaters;                     // Total de avaliadores
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

    @OrderBy("isMain DESC")
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<ProductImage> images = new HashSet<ProductImage>();             // Imagens do produto

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<Specification> specifications = new HashSet<Specification>();   // Especificações

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<ProductVersion> productVersions = new HashSet<ProductVersion>();   // Especificações
   
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;                                                  // Category

    @JsonIgnore
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<ItemCart> itemCart = new HashSet<ItemCart>();
                          
    public void addAllImages(Set<ProductImage> images) {
        this.images = images.stream().map(productImage -> {
            productImage.setProduct(this);
            return productImage;
        }).collect(Collectors.toSet());
    }

    public void addAllProductVersions(Set<ProductVersion> productVersions) {
        this.productVersions = productVersions.stream().map(productVersion -> {
            productVersion.setProduct(this);
            return productVersion;
        }).collect(Collectors.toSet());
    }

    public void addAllSpecifications(Set<Specification> specifications) {
        this.specifications = specifications.stream().map(specification -> {
            specification.setProduct(this);
            return specification;
        }).collect(Collectors.toSet());
    }
}