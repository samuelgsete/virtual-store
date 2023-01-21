import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadImageComponent } from './components/uploads-images/upload-image/upload-image.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { AddColorComponent } from './components/colors/add-color/add-color.component';
import { AddProductVersionsComponent } from './components/product-versions/add-product-versions/add-product-versions.component';
import { SeeCatalogComponent } from './components/catalog/see-catalog/see-catalog.component';

const routes: Routes = [
  { path: 'uploads/images', component: UploadImageComponent },
  { path: 'cores/adicionar', component: AddColorComponent },
  { path: 'produto/novo', component: CreateProductComponent },
  { path: 'produto/versoes', component: AddProductVersionsComponent },
  { path: 'catalogo', component: SeeCatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}