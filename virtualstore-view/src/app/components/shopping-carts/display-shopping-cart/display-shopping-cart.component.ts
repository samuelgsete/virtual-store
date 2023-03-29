import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemCart } from 'src/app/models/item-cart.entity';
import { ShoppingCart } from 'src/app/models/shopping-cart.entity';
import { DeleteItemCartService } from 'src/app/usecases/itemCart/delete-item-cart.service';
import { SelectItemCartService } from 'src/app/usecases/itemCart/select-item-cart.service';
import { UpdateQuantityItemCartService } from 'src/app/usecases/itemCart/update-quantity-item-cart.service';
import { FindOneShoppingCartService } from 'src/app/usecases/shoppingCarts/find-one-shopping-cart.service';

@Component({
  selector: 'app-display-shopping-cart',
  templateUrl: './display-shopping-cart.component.html',
  styleUrls: ['./display-shopping-cart.component.css']
})
export class DisplayShoppingCartComponent implements OnInit {

  protected shoppingCart!: ShoppingCart;

  public constructor(
    protected readonly router: Router,
    protected readonly findOne: FindOneShoppingCartService,
    protected readonly updateQuantityItem: UpdateQuantityItemCartService,
    protected readonly selectItem: SelectItemCartService,
    protected readonly deleteOne: DeleteItemCartService
  ) {}

  public addUnit(itemCart: ItemCart): void {
    ++itemCart.quantity;
    this.updateQuantityItem.run(itemCart.id, itemCart);
  }

  public removeUnit(itemCart: ItemCart): void {
    --itemCart.quantity;
    this.updateQuantityItem.run(itemCart.id, itemCart);
  }

  public selectItemCart(itemCart: ItemCart, isSelected: boolean): void {
    itemCart.isSelected = isSelected;
    this.selectItem.run(itemCart.id, itemCart);
  }

  public ngOnInit(): void {
    const cartId = parseInt(this.router.url.split('/')[2]);
    this.findOne.run(cartId);
    this.findOne.done().subscribe(shoppingCart => {
      console.log(shoppingCart);
      this.shoppingCart = shoppingCart;
    });
    this.updateQuantityItem.done().subscribe(response => {
      this.findOne.run(cartId);
    })
    this.selectItem.done().subscribe(response => {
      this.findOne.run(cartId);
    })
    this.deleteOne.done().subscribe(response => {
      this.findOne.run(cartId)
    });
  }
}