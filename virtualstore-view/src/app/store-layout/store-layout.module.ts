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
import { FieldSearchComponent } from './top-bar/field-search/field-search.component';
import { NavBarComponent } from './top-bar/nav-bar/nav-bar.component';
import { DisplayDepartmentsComponent } from './top-bar/display-departments/display-departments.component';
import { DiplayProductsByDepartments } from '../usecases/products/display-products-by-departments.service';
import { FindOneShoppingCartResource } from '../resources/shoppingCarts/find-one-shopping-cart.resource';
import { FindOneShoppingCartService } from '../usecases/shoppingCarts/find-one-shopping-cart.service';

@NgModule({
  declarations: [
    TopBarComponent,
    StoreLayoutComponent,
    StoreBannerComponent,
    FooterComponent,
    FieldSearchComponent,
    NavBarComponent,
    DisplayDepartmentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DepartmentsModule
  ],
  providers: [
    ListProductsPaginateService,
    ListProductsPaginateResource,
    DiplayProductsByDepartments,
    FindOneShoppingCartResource,
    FindOneShoppingCartService
  ]
})
export class StoreLayoutModule {}