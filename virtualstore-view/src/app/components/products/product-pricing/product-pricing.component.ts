import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Pricing } from 'src/app/models/pricing.entity';
import { GeneratePricingService } from 'src/app/usecases/pricing/generate-pricing.service';

const PERCENTAGE = 100;

@Component({
  selector: 'app-product-pricing',
  templateUrl: './product-pricing.component.html',
  styleUrls: ['./product-pricing.component.css']
})
export class ProductPricingComponent implements OnInit {

  @Input() public pricing: Pricing = new Pricing();
  public formPricing!: FormGroup;
 
  public constructor(
    protected readonly _fb: FormBuilder,
    protected readonly generatePricing: GeneratePricingService
  ) {}

  public formatLabel(rateDiscount: number): string {
    return rateDiscount + "%";
  }

  private updateForm(pricing: Pricing): void {
    this.formPricing.patchValue({
      basePrice: pricing.basePrice,
      incashPrice: pricing.incashPrice,
      installmentPrice: pricing.installmentPrice,
      rateInstallmentDiscount: pricing.rateInstallmentDiscount * PERCENTAGE,
      rateIncashDiscount: pricing.rateIncashDiscount * PERCENTAGE,
      incashDiscount: pricing.incashDiscount,
      installmentDiscount: pricing.installmentDiscount,
      maxInstallment: pricing.maxInstallment
    })
  }

  public ngOnInit(): void {
    this.formPricing = this._fb.group({
      basePrice: [this.pricing.basePrice, Validators.required],
      incashPrice: [this.pricing.incashPrice, Validators.required],
      installmentPrice: [this.pricing.installmentPrice, Validators.required],
      rateInstallmentDiscount: [this.pricing.rateInstallmentDiscount, Validators.required],
      rateIncashDiscount: [this.pricing.rateIncashDiscount, Validators.required],
      incashDiscount: [this.pricing.incashDiscount, Validators.required],
      installmentDiscount: [this.pricing.installmentDiscount, Validators.required],
      maxInstallment: [this.pricing.maxInstallment, Validators.required]
    })

    this.generatePricing.done().subscribe(pricing => {
      this.pricing = pricing;
      this.updateForm(this.pricing);
    })
  }
}