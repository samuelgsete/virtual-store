import { Component, OnInit } from '@angular/core';

import { CreateProductService } from 'src/app/usecases/products/create-product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public constructor(protected readonly create: CreateProductService) {}

  public ngOnInit(): void {}

}