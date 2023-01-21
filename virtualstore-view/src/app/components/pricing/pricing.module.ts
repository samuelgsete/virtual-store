import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { GeneratePricingComponent } from './generate-pricing/generate-pricing.component';
import { GeneratePricingResource } from 'src/app/resources/pricing/generate-pricing.resource';
import { GeneratePricingService } from 'src/app/usecases/pricing/generate-pricing.service';

@NgModule({
  declarations: [
    GeneratePricingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GeneratePricingComponent
  ],
  providers: [
    GeneratePricingResource,
    GeneratePricingService
  ]
})
export class PricingModule {}