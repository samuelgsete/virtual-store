package br.com.samuel.app.usercases.pricing;

import java.math.BigDecimal;

import org.springframework.stereotype.Service;

import br.com.samuel.app.models.Pricing;

@Service
public class GeneratePricing {
    
    public Pricing run(BigDecimal basePrice, Double rateIncashDiscount, Double rateInstallmentDiscount, Integer maxInstallments) {
        Pricing pricing = new Pricing();
        pricing.setBasePrice(basePrice);
        pricing.setRateIncashDiscount(rateIncashDiscount);
        pricing.setRateInstallmentDiscount(rateInstallmentDiscount);
        pricing.setMaxInstallment(maxInstallments);
        pricing.generatePrice();
        pricing.generateInstallments();
        return pricing;
    }
}