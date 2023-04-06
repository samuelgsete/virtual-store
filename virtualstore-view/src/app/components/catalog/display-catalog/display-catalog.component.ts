import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pagination } from 'src/app/models/pagination.entity';
import { Product } from 'src/app/models/product.entity';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';
import { OrderByProductsService } from 'src/app/usecases/products/orderby-products.service';
import { GoToCheckoutProductService } from 'src/app/usecases/products/go-to-checkout-product.service';

@Component({
  selector: 'app-display-catalog',
  templateUrl: './display-catalog.component.html',
  styleUrls: ['./display-catalog.component.css']
})
export class DisplayCatalogComponent implements OnInit {

  protected department: string = '';
  protected category: string = '';
  protected pagination: Pagination = new Pagination();
  protected products: Product[] = [];
 
  public constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly listPaginate: ListProductsPaginateService,
    protected readonly orderBy: OrderByProductsService,
    protected readonly goToCheckoutProduct: GoToCheckoutProductService
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.department = params['department'] || '';
      this.category = params['category'] || '';
      this.pagination.ordination = params['ordination'] || '';
      this.pagination.category = this.category;
      this.listPaginate.run(this.pagination);
    })
    this.listPaginate.done().subscribe(response => {
      this.products = response.content
    })
  }
}