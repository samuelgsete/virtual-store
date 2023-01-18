import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBrandsPaginateResource } from 'src/app/resources/brands/list-brands-paginate.resource';
import { ListBrandsPaginateService } from 'src/app/usecases/brands/list-brands-paginate.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ListBrandsPaginateResource,
    ListBrandsPaginateService
  ]
})
export class BrandsModule {}