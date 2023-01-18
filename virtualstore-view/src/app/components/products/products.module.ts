import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ConditionsOfProductService } from 'src/app/usecases/products/conditions-of-product.service';
import { AddSpecificationComponent } from './add-specification/add-specification.component';
import { UploadsImagesModule } from '../uploads-images/uploads-images.module';
import { ProductMeasurementsComponent } from './product-measurements/product-measurements.component';
import { ProductPricingComponent } from './product-pricing/product-pricing.component';
import { GeneratePricingResource } from 'src/app/resources/pricing/generate-pricing.resource';
import { GeneratePricingService } from 'src/app/usecases/pricing/generate-pricing.service';
import { ListDepartmentsPaginateService } from 'src/app/usecases/departments/list-departments-paginate.service';
import { ListDepartmentsPaginateResource } from 'src/app/resources/departments/list-departments-paginate.resource';
import { ColorsModule } from '../colors/colors.module';
import { BrandsModule } from '../brands/brands.module';

@NgModule({
  declarations: [
    CreateProductComponent,
    AddSpecificationComponent,
    ProductMeasurementsComponent,
    ProductPricingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UploadsImagesModule,
    ColorsModule,
    BrandsModule
  ],
  providers: [
    ConditionsOfProductService,
    GeneratePricingResource,
    GeneratePricingService,
    ListDepartmentsPaginateService,
    ListDepartmentsPaginateResource
  ]
})
export class ProductsModule {}