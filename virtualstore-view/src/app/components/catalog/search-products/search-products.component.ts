import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pagination } from 'src/app/models/pagination.entity';
import { Product } from 'src/app/models/product.entity';
import { GoToCheckoutProductService } from 'src/app/usecases/products/go-to-checkout-product.service';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';
import { OrderByProductsService } from 'src/app/usecases/products/orderby-products.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css'],
  providers: [OrderByProductsService]
})
export class SearchProductsComponent implements OnInit {

  protected pagination: Pagination = new Pagination();
  protected products: Product[] = [];
  
  public constructor(
    private readonly route: ActivatedRoute,
    protected readonly listPaginate: ListProductsPaginateService,
    protected readonly orderBy: OrderByProductsService,
    protected readonly goToCheckoutProduct: GoToCheckoutProductService
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pagination.search = params['search'] || '';
      this.pagination.ordination = params['ordination'] || '';
      this.listPaginate.run(this.pagination);
    })
    this.listPaginate.done().subscribe(response => {
      this.products = response.content
    })
  }
}