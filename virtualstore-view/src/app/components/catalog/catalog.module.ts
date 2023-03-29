import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SeeCatalogComponent } from './see-catalog/see-catalog.component';
import { ListProductsPaginateResource } from 'src/app/resources/products/list-products-paginate.resource';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';
import { SeeProductComponent } from './see-product/see-product.component';
import { FindByUniqueCodeService } from 'src/app/usecases/products/findby-unique-code.service';
import { FindByUniqueCodeResource } from 'src/app/resources/products/findby-unique-code.resource';
import { CalculateShippingComponent } from './calculate-shipping/calculate-shipping.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { DisplayCatalogComponent } from './display-catalog/display-catalog.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { OrderByProductsService } from 'src/app/usecases/products/orderby-products.service';
import { DisplayMainImageService } from 'src/app/usecases/products/display-main-image.service';
import { DisplayDetailsProductService } from 'src/app/usecases/products/display-details-product.service';
import { CreateShoppingCartService } from 'src/app/usecases/shoppingCarts/create-shopping-cart.service';
import { CreateShoppingCartResource } from 'src/app/resources/shoppingCarts/create-shopping-cart.resource';
import { AddItemCartResource } from 'src/app/resources/itemCart/add-item-cart.resource';
import { AddItemCartService } from 'src/app/usecases/itemCart/add-item-cart.service';

@NgModule({
  declarations: [
    SeeCatalogComponent,
    SeeProductComponent,
    CalculateShippingComponent,
    AddToCartComponent,
    DisplayCatalogComponent,
    SearchProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ListProductsPaginateResource,
    ListProductsPaginateService,
    FindByUniqueCodeService,
    FindByUniqueCodeResource,
    OrderByProductsService,
    DisplayMainImageService,
    DisplayDetailsProductService,
    CreateShoppingCartService,
    CreateShoppingCartResource,
    AddItemCartResource,
    AddItemCartService
  ]
})
export class CatalogModule {}