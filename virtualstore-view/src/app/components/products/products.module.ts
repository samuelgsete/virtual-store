import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ConditionsOfProductService } from 'src/app/usecases/products/conditions-of-product.service';
import { AddSpecificationComponent } from './add-specification/add-specification.component';
import { UploadsImagesModule } from '../uploads-images/uploads-images.module';
import { ProductMeasurementsComponent } from './product-measurements/product-measurements.component';
import { ListDepartmentsPaginateService } from 'src/app/usecases/departments/list-departments-paginate.service';
import { ListDepartmentsPaginateResource } from 'src/app/resources/departments/list-departments-paginate.resource';
import { ColorsModule } from '../colors/colors.module';
import { BrandsModule } from '../brands/brands.module';
import { ProductVersionsModule } from '../product-versions/product-versions.module';
import { PricingModule } from '../pricing/pricing.module';
import { GeneralInfoProductComponent } from './general-info-product/general-info-product.component';
import { CreateProductResource } from 'src/app/resources/products/create-product.resource';
import { CreateProductService } from 'src/app/usecases/products/create-product.service';

@NgModule({
  declarations: [
    CreateProductComponent,
    AddSpecificationComponent,
    ProductMeasurementsComponent,
    GeneralInfoProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UploadsImagesModule,
    ColorsModule,
    BrandsModule,
    PricingModule,
    ProductVersionsModule
  ],
  providers: [
    ConditionsOfProductService,
    ListDepartmentsPaginateService,
    ListDepartmentsPaginateResource,
    CreateProductResource,
    CreateProductService
  ]
})
export class ProductsModule {}