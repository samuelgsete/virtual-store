import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadImageComponent } from './components/uploads-images/upload-image/upload-image.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { AddColorComponent } from './components/colors/add-color/add-color.component';
import { AddProductVersionsComponent } from './components/product-versions/add-product-versions/add-product-versions.component';
import { SeeCatalogComponent } from './components/catalog/see-catalog/see-catalog.component';
import { StoreLayoutComponent } from './store-layout/store-layout.component';
import { SeeProductComponent } from './components/catalog/see-product/see-product.component';

const routes: Routes = [
  { path: 'uploads/images', component: UploadImageComponent },
  { path: 'cores/adicionar', component: AddColorComponent },
  { path: 'produto/novo', component: CreateProductComponent },
  { path: 'produto/versoes', component: AddProductVersionsComponent },
  { path: 'catalogo', component: StoreLayoutComponent, children: [
    { path: 'ver', component: SeeCatalogComponent },
    { path: 'produto/:code', component: SeeProductComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}