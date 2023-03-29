package br.com.samuel.app.models;

import java.math.BigDecimal;
import java.math.RoundingMode;

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
@Table(name = "items_cart")
public class ItemCart extends EntityBase {
    
    private Integer quantity;
    private Boolean isSelected = false;
    private BigDecimal subtotalIncash;
    private BigDecimal subtotalInstallment;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "product_version_id")
    private ProductVersion productVersion;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="shopping_cart_id", referencedColumnName="id")
    private ShoppingCart shoppingCart;

    public void updateSubtotal() {
        subtotalIncash = product
                            .getPricing()
                            .getIncashPrice()
                            .multiply(new BigDecimal(quantity))
                            .setScale(2, RoundingMode.HALF_UP);
        subtotalInstallment = product
                            .getPricing()
                            .getInstallmentPrice()
                            .multiply(new BigDecimal(quantity))
                            .setScale(2, RoundingMode.HALF_UP);
        
    }
}