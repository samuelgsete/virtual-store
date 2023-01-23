import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { DepartmentsModule } from '../components/departments/departments.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StoreLayoutComponent } from './store-layout.component';
import { StoreBannerComponent } from './store-banner/store-banner.component';
import { FooterComponent } from './footer/footer.component';
import { ListProductsPaginateService } from '../usecases/products/list-products-paginate.service';
import { ListProductsPaginateResource } from '../resources/products/list-products-paginate.resource';

@NgModule({
  declarations: [
    TopBarComponent,
    StoreLayoutComponent,
    StoreBannerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DepartmentsModule
  ],
  providers: [
    ListProductsPaginateService,
    ListProductsPaginateResource
  ]
})
export class StoreLayoutModule {}