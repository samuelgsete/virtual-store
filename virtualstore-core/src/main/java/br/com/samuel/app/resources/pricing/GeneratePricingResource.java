package br.com.samuel.app.resources.pricing;

import java.math.BigDecimal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.models.Pricing;
import br.com.samuel.app.usercases.pricing.GeneratePricing;

@RestController
@RequestMapping("pricing")
public class GeneratePricingResource {

    @Autowired
    private GeneratePricing generatePricing;

    @GetMapping("/generate")
    public ResponseEntity<Pricing> run(
        @RequestParam BigDecimal basePrice, 
        @RequestParam Double rateIncashDiscount, 
        @RequestParam Double rateInstallmentDiscount, 
        @RequestParam Integer maxInstallment
    ) 
    {
        return ResponseEntity.ok(
            generatePricing.run(
                basePrice, 
                rateIncashDiscount, 
                rateInstallmentDiscount, 
                maxInstallment
            )
        );
    }    
}