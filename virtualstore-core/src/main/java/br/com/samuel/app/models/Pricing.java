package br.com.samuel.app.models;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.LinkedHashSet;
import java.util.Set;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderBy;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Pricing extends EntityBase {

    private BigDecimal basePrice;                   // preço base
    private BigDecimal incashPrice;                 // preço avista
    private BigDecimal installmentPrice;            // preço parcelado
    private Double rateInstallmentDiscount;         // taxa desconto parcelado
    private Double rateIncashDiscount;              // taxa desconto avista
    private BigDecimal incashDiscount;              // desconto avista
    private BigDecimal installmentDiscount;         // desconto parcelamento
    private Integer maxInstallment;                 // parcelamento

    @OrderBy("amount DESC")
    @OneToMany(mappedBy = "pricing", cascade = CascadeType.ALL)
    private Set<Installment> installments = new LinkedHashSet<Installment>();

    public void generatePrice() {
       // Calculando o desconto do preço avista
       incashDiscount = basePrice.multiply(new BigDecimal(rateIncashDiscount)).setScale(2, RoundingMode.HALF_UP);
       // Calculando o preco avista
       incashPrice = basePrice.subtract(incashDiscount).setScale(2, RoundingMode.HALF_UP);;
       // Calculado o desconto do preço parcelado
       installmentDiscount = basePrice.multiply(new BigDecimal(rateInstallmentDiscount)).setScale(2, RoundingMode.HALF_UP);;
       // Calculado o preço parcelado
       installmentPrice = basePrice.subtract(installmentDiscount).setScale(2, RoundingMode.HALF_UP);;
    }

    public void generateInstallments() {
        installments = new LinkedHashSet<Installment>();
        for(int quantity = 1; quantity <= maxInstallment; quantity++) {
            var installment = new Installment();
            var amount = installmentPrice.divide(BigDecimal.valueOf(quantity), 2, RoundingMode.HALF_UP);
            installment.setQuantity(quantity);
            installment.setAmount(amount);
            installment.setPricing(this);
            installments.add(installment);
        }
    }
}