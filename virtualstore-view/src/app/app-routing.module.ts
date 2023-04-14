import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UploadImageComponent } from './components/uploads-images/upload-image/upload-image.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { AddColorComponent } from './components/colors/add-color/add-color.component';
import { AddProductVersionsComponent } from './components/product-versions/add-product-versions/add-product-versions.component';
import { StoreLayoutComponent } from './store-layout/store-layout.component';
import { HomeComponent } from './components/home/home.component';
import { DisplayCatalogComponent } from './components/catalog/display-catalog/display-catalog.component';
import { SearchProductsComponent } from './components/catalog/search-products/search-products.component';
import { DisplayShoppingCartComponent } from './components/shopping-carts/display-shopping-cart/display-shopping-cart.component';
import { DisplayColorsComponent } from './components/colors/display-colors/display-colors.component';
import { CheckoutProductComponent } from './components/catalog/checkout-product/checkout-product.component';
import { CreateColorComponent } from './components/colors/create-color/create-color.component';
import { CreateBrandComponent } from './components/brands/create-brand/create-brand.component';
import { DisplayBrandsComponent } from './components/brands/display-brands/display-brands.component';
import { DisplayProductsComponent } from './components/products/display-products/display-products.component';

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'uploads/images', component: UploadImageComponent },
      { path: 'cores/adicionar', component: AddColorComponent },
      { path: 'produto/novo', component: CreateProductComponent },
      { path: 'produto/versoes', component: AddProductVersionsComponent },
      { path: 'catalog', component: StoreLayoutComponent, children: [
        { path: 'view', component: DisplayCatalogComponent },
        { path: 'search', component: SearchProductsComponent },
        { path: 'product/checkout/:code', component: CheckoutProductComponent }
      ]},
      { path: 'home', component: StoreLayoutComponent, children: [
        { path: '', component: HomeComponent }
      ]},
      { path: 'shopping-cart/:id', component: DisplayShoppingCartComponent },
      { path: 'colors', component: DisplayColorsComponent },
      { path: 'colors/create', component: CreateColorComponent },
      { path: 'brands/create', component: CreateBrandComponent },
      { path: 'brands', component: DisplayBrandsComponent },
      { path: 'products', component: DisplayProductsComponent }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {}