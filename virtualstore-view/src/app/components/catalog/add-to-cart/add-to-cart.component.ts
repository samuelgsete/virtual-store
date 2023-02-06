import { Component, Input, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { ProductVersion } from 'src/app/models/product-version.entity';
import { Product } from 'src/app/models/product.entity';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  
  @Input() 
  protected _product: Product = new Product()
  protected formCart!: FormGroup;
  protected productVersionSelected: ProductVersion = new ProductVersion();

  public constructor(
    private readonly _fb: FormBuilder,
    protected dialogRef: MatDialogRef<AddToCartComponent>,
    @Inject(MAT_DIALOG_DATA) protected product: Product,
  ) {}

  protected selectVersion(productVersion: ProductVersion): void {
    this.productVersionSelected = productVersion;
  }

  public ngOnInit(): void {
    this._product = this.product;
    this.formCart = this._fb.group({
      quantity: [0, Validators.required],
      productVersion: ['', Validators.required],
    })
  }
}