import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { DisplayBrandsComponent } from './display-brands/display-brands.component';
import { GoToCheckoutProductService } from 'src/app/usecases/products/go-to-checkout-product.service';
import { ScrollToService } from 'src/app/shared/services/scroll-to.service';
import { GoToWebsiteService } from 'src/app/shared/services/go-to-website.service';

@NgModule({
  declarations: [
    HomeComponent,
    DisplayProductsComponent,
    DisplayBrandsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    GoToCheckoutProductService,
    ScrollToService,
    GoToWebsiteService
  ]
})
export class HomeModule {}