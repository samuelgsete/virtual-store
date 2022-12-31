package br.com.samuel.app.models;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ProductMeasurements extends EntityBase {   // Medidas do produto

    private Double weight;                              // Peso 
    private Double height;                              // Algura
    private Double width;                               // Largura
    private Double diameter;                            // Diâmetro ou profundidade
}