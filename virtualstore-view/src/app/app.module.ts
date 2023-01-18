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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UploadsImagesModule,
    ProductsModule,
    ColorsModule,
    BrandsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}