import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pagination } from 'src/app/models/pagination.entity';
import { Product } from 'src/app/models/product.entity';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';

@Component({
  selector: 'app-see-catalog',
  templateUrl: './see-catalog.component.html',
  styleUrls: ['./see-catalog.component.css']
})
export class SeeCatalogComponent implements OnInit {

  protected products: Product[] = [];
  protected pagination: Pagination = new Pagination();

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly listPaginate: ListProductsPaginateService
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pagination.ordination = params['ordination'] || '';
      this.pagination.search = params['search'] || '';
      this.pagination.page = params['page'] || '';
      this.listPaginate.run(this.pagination);
      this.listPaginate.done().subscribe(response => {
        this.products = response.content;
        console.log(this.products);
        this.pagination.isFirstPage = response.first;
        this.pagination.isLastPage = response.last;
        this.pagination.totalElements = response.totalElements;
      })
    });
  }
}