import { Component, Input, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ItemCart } from 'src/app/models/item-cart.entity';

import { ProductVersion } from 'src/app/models/product-version.entity';
import { Product } from 'src/app/models/product.entity';
import { AddItemCartService } from 'src/app/usecases/itemCart/add-item-cart.service';
import { CreateShoppingCartService } from 'src/app/usecases/shoppingCarts/create-shopping-cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  
  @Input() protected _product: Product = new Product()
  protected formCart!: FormGroup;
  protected productVersionSelected: ProductVersion = new ProductVersion();

  public constructor(
    private readonly _fb: FormBuilder,
    protected dialogRef: MatDialogRef<AddToCartComponent>,
    @Inject(MAT_DIALOG_DATA) protected product: Product,
    private readonly createShoppingCart: CreateShoppingCartService,
    private readonly addItemCart: AddItemCartService
  ) {}

  protected selectVersion(productVersion: ProductVersion): void {
    this.productVersionSelected = productVersion;
  }

  protected addItem(): void {
    /*if(localStorage.getItem('shopping_cart') == null) {
      this.createShoppingCart.run(
        this._product,
        this.formCart.value.productVersion,
        this.formCart.value.quantity
      );
    }*/
    const itemCart = new ItemCart({
      id: null,
      isSelected: true,
      quantity: this.formCart.value.quantity,
      productVersion: this.formCart.value.productVersion,
      product: this.product,
      subtotalIncash: 0,
      subtotalInstallment: 0
    })
    console.log(itemCart);
    this.addItemCart.run(14, itemCart);
  }

  public ngOnInit(): void {
    this._product = this.product;
    this.formCart = this._fb.group({
      quantity: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
      productVersion: ['', Validators.required],
    })
    this.addItemCart.done().subscribe(response => {
      console.log(response);
    })
  }
}