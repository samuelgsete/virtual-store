import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ProductVersion } from 'src/app/models/product-version.entity';
import { Product } from 'src/app/models/product.entity';
import { FindProductByUniqueCodeService } from 'src/app/usecases/products/find-product-by-unique-code.service';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.css']
})
export class CheckoutProductComponent implements OnInit {
  
  protected product: Product = new Product();
  protected productVersionSelected: ProductVersion = new ProductVersion();
  protected quantity: number = 0;

  public constructor(
    private readonly dialog: MatDialog,
    private readonly router: Router,
    protected readonly findOne: FindProductByUniqueCodeService
  ) {}

  public openAddToCart(): void {
    this.dialog.open(AddToCartComponent, {
      data: this.product
    });
  }

  public ngOnInit(): void {
    const code = this.router.url.split("/")[4];
    this.findOne.run(code)
    this.findOne.done().subscribe(product => { this.product = product })
  }
}