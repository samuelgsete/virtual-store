package br.com.samuel.app.models;

import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

// Entidade Estoque

@Getter
@Setter
@Entity
public class Stock extends EntityBase {
    
    private Integer availableUnits;                                 // Unidades disponíveis
    
    @Column(name = "updated_at", columnDefinition = "TIMESTAMP")    
    private LocalDateTime updatedAt = LocalDateTime.now();          // Data da última atualização
}