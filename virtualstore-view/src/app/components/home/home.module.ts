import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { DisplayBrandsComponent } from './display-brands/display-brands.component';

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
  ]
})
export class HomeModule {}