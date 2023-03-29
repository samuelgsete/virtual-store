package br.com.samuel.app.models;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Set;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "resume_cart")
public class ResumeCart extends EntityBase {
    
    private BigDecimal subtotalIncash = BigDecimal.ZERO;
    private BigDecimal subtotalInstallment = BigDecimal.ZERO;
    private BigDecimal incashDiscount = BigDecimal.ZERO;
    private Integer maxInstallment = 0; 

    public void updateResume(Set<ItemCart> items) {
        subtotalIncash = items.stream()
            .filter(itemCart -> itemCart.getIsSelected())
            .map(itemCart -> {
                itemCart.updateSubtotal();
                return itemCart.getSubtotalIncash();
            })
            .reduce(BigDecimal.ZERO, BigDecimal::add);

        subtotalInstallment = items.stream()
            .filter(itemCart -> itemCart.getIsSelected())
            .map(itemCart -> {
                itemCart.updateSubtotal();
                return itemCart.getSubtotalInstallment();
            })
            .reduce(BigDecimal.ZERO, BigDecimal::add);

        maxInstallment = items.stream()
            .filter(itemCart -> itemCart.getIsSelected())
            .mapToInt(itemCart -> itemCart.getProduct().getPricing().getMaxInstallment())
            .min()
            .orElse(0);

        incashDiscount = subtotalInstallment.subtract(subtotalIncash).setScale(2, RoundingMode.HALF_UP);
    }
}