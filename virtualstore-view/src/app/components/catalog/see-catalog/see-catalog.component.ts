import { Component, OnInit } from '@angular/core';

import { Pagination } from 'src/app/models/pagination.entity';
import { Product } from 'src/app/models/product.entity';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';

@Component({
  selector: 'app-see-catalog',
  templateUrl: './see-catalog.component.html',
  styleUrls: ['./see-catalog.component.css']
})
export class SeeCatalogComponent implements OnInit {

  protected products: Product[] = []

  public constructor(private readonly listPaginate: ListProductsPaginateService) {}

  public ngOnInit(): void {
    this.listPaginate.run(new Pagination())
    this.listPaginate.done().subscribe(response => {
      this.products = response.content;
      console.log(this.products);
    })
  }
}