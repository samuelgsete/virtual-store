import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ListProductsPaginateResource } from 'src/app/resources/products/list-products-paginate.resource';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';
import { FindProductByUniqueCodeService } from 'src/app/usecases/products/find-product-by-unique-code.service';
import { FindProductByUniqueCodeResource } from 'src/app/resources/products/find-product-by-unique-code.resource';
import { CalculateShippingComponent } from './calculate-shipping/calculate-shipping.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { DisplayCatalogComponent } from './display-catalog/display-catalog.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { OrderByProductsService } from 'src/app/usecases/products/orderby-products.service';
import { GoToCheckoutProductService } from 'src/app/usecases/products/go-to-checkout-product.service';
import { CreateShoppingCartService } from 'src/app/usecases/shoppingCarts/create-shopping-cart.service';
import { CreateShoppingCartResource } from 'src/app/resources/shoppingCarts/create-shopping-cart.resource';
import { AddItemCartResource } from 'src/app/resources/itemCart/add-item-cart.resource';
import { AddItemCartService } from 'src/app/usecases/itemCart/add-item-cart.service';
import { CheckoutProductComponent } from './checkout-product/checkout-product.component';

@NgModule({
  declarations: [
    CalculateShippingComponent,
    AddToCartComponent,
    DisplayCatalogComponent,
    SearchProductsComponent,
    CheckoutProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ListProductsPaginateResource,
    ListProductsPaginateService,
    FindProductByUniqueCodeService,
    FindProductByUniqueCodeResource,
    OrderByProductsService,
    GoToCheckoutProductService,
    CreateShoppingCartService,
    CreateShoppingCartResource,
    AddItemCartResource,
    AddItemCartService
  ]
})
export class CatalogModule {}