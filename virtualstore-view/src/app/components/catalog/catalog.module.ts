import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SeeCatalogComponent } from './see-catalog/see-catalog.component';
import { ListProductsPaginateResource } from 'src/app/resources/products/list-products-paginate.resource';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';

@NgModule({
  declarations: [
    SeeCatalogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ListProductsPaginateResource,
    ListProductsPaginateService
  ]
})
export class CatalogModule {}