import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SeeCatalogComponent } from './see-catalog/see-catalog.component';
import { ListProductsPaginateResource } from 'src/app/resources/products/list-products-paginate.resource';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';
import { SeeProductComponent } from './see-product/see-product.component';
import { FindByUniqueCodeService } from 'src/app/usecases/products/findby-unique-code.service';
import { FindByUniqueCodeResource } from 'src/app/resources/products/findby-unique-code.resource';
import { CalculateShippingComponent } from './calculate-shipping/calculate-shipping.component';

@NgModule({
  declarations: [
    SeeCatalogComponent,
    SeeProductComponent,
    CalculateShippingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ListProductsPaginateResource,
    ListProductsPaginateService,
    FindByUniqueCodeService,
    FindByUniqueCodeResource
  ]
})
export class CatalogModule {}