package br.com.samuel.app.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "product_versions")
public class ProductVersion extends EntityBase {                            // Versão do produto

    @ManyToOne
    @JoinColumn(name = "color_id")
    private Color color;                                                    // Cor da versão do produto
    
    @JoinColumn(name = "stock_id")
    @OneToOne(cascade = CascadeType.ALL)
    private Stock stock;                                                    // Estoque da versão do produto
    
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;
}