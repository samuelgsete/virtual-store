package br.com.samuel.app.models;

import java.math.BigDecimal;
import jakarta.persistence.Entity;
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
    private Integer installment;                    // parcelamento

    public void generatePrice() {
       // Calculando o desconto do preço avista
       incashDiscount = basePrice.multiply(new BigDecimal(rateIncashDiscount));
       // Calculando o preco avista
       incashPrice = basePrice.subtract(incashDiscount);
       // Calculado o desconto do preço parcelado
       installmentDiscount = basePrice.multiply(new BigDecimal(rateInstallmentDiscount));
       // Calculado o preço parcelado
       installmentPrice = basePrice.subtract(installmentDiscount);
    }
}