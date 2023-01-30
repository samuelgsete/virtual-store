import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductVersion } from 'src/app/models/product-version.entity';
import { Product } from 'src/app/models/product.entity';
import { FindByUniqueCodeService } from 'src/app/usecases/products/findby-unique-code.service';

@Component({
  selector: 'app-see-product',
  templateUrl: './see-product.component.html',
  styleUrls: ['./see-product.component.css']
})
export class SeeProductComponent implements OnInit {

  protected product: Product = new Product();
  protected productVersionSelected: ProductVersion = new ProductVersion();
  protected formProductVersion: FormControl = new FormControl('', {
    validators: Validators.required
  })

  public constructor(
    private readonly router: Router,
    private readonly findOne: FindByUniqueCodeService
  ) {}

  protected displayFn(productVersion: ProductVersion): string {
    return productVersion.color.name;
  }

  protected selectVersion(productVersion: ProductVersion): void {
    this.productVersionSelected = productVersion;
    this.formProductVersion.patchValue(productVersion);
  }

  public ngOnInit(): void {
    const code = this.router.url.split("/")[3]
    this.findOne.run(code)
    this.findOne.done().subscribe(product => {
      this.product = product;
      this.selectVersion(this.product.productVersions[0]);
      console.log(this.product);
    })
  }
}