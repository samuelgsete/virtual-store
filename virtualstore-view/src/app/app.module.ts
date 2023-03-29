import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadsImagesModule } from './components/uploads-images/uploads-images.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './components/products/products.module';
import { ColorsModule } from './components/colors/colors.module';
import { BrandsModule } from './components/brands/brands.module';
import { ProductVersionsModule } from './components/product-versions/product-versions.module';
import { PricingModule } from './components/pricing/pricing.module';
import { CatalogModule } from './components/catalog/catalog.module';
import { StoreLayoutModule } from './store-layout/store-layout.module';
import { HomeModule } from './components/home/home.module';
import { ShoppingCartsModule } from './components/shopping-carts/shopping-carts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreLayoutModule,
    UploadsImagesModule,
    ProductsModule,
    ColorsModule,
    BrandsModule,
    ProductVersionsModule,
    PricingModule,
    CatalogModule,
    HomeModule,
    ShoppingCartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}