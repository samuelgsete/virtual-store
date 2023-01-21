import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductVersionsComponent } from './add-product-versions/add-product-versions.component';
import { ColorsModule } from '../colors/colors.module';
import { PricingModule } from '../pricing/pricing.module';
import { UploadsImagesModule } from '../uploads-images/uploads-images.module';
import { ListProductVersionsComponent } from './list-product-versions/list-product-versions.component';

@NgModule({
  declarations: [
    AddProductVersionsComponent,
    ListProductVersionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ColorsModule,
    PricingModule,
    UploadsImagesModule
  ],
  exports: [
    AddProductVersionsComponent
  ]
})
export class ProductVersionsModule {}