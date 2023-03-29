import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { FindOneShoppingCartResource } from 'src/app/resources/shoppingCarts/find-one-shopping-cart.resource';
import { FindOneShoppingCartService } from 'src/app/usecases/shoppingCarts/find-one-shopping-cart.service';
import { DisplayShoppingCartComponent } from './display-shopping-cart/display-shopping-cart.component';
import { UpdateQuantityItemCartService } from 'src/app/usecases/itemCart/update-quantity-item-cart.service';
import { UpdatedQuantityItemCartResource } from 'src/app/resources/itemCart/updated-quantity-item-cart.resource';
import { SelectItemCartResource } from 'src/app/resources/itemCart/select-item-cart.resource';
import { SelectItemCartService } from 'src/app/usecases/itemCart/select-item-cart.service';
import { AddItemCartResource } from 'src/app/resources/itemCart/add-item-cart.resource';
import { AddItemCartService } from 'src/app/usecases/itemCart/add-item-cart.service';
import { DeleteItemCartResource } from 'src/app/resources/itemCart/delete-item-cart.resource';
import { DeleteItemCartService } from 'src/app/usecases/itemCart/delete-item-cart.service';

@NgModule({
  declarations: [
    DisplayShoppingCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    FindOneShoppingCartResource,
    FindOneShoppingCartService,
    UpdatedQuantityItemCartResource,
    UpdateQuantityItemCartService,
    SelectItemCartResource,
    SelectItemCartService,
    AddItemCartResource,
    AddItemCartService,
    DeleteItemCartResource,
    DeleteItemCartService
  ]
})
export class ShoppingCartsModule {}