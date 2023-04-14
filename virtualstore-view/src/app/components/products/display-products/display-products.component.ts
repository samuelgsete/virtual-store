import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Pagination } from 'src/app/models/pagination.entity';
import { Product } from 'src/app/models/product.entity';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  protected products: Product[] = [];
  protected pagination: Pagination = new Pagination({ size: 7 });
  protected formSearch: FormControl = new FormControl();
  protected totalElements: number = 0;
  
  public constructor(
    protected readonly route: ActivatedRoute,
    protected readonly router: Router,
    protected readonly listProducts: ListProductsPaginateService
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let currentPage = params['currentPage'];
      let search = params['search'] || '';
      this.pagination.page = currentPage;
      this.pagination.search = search;
      this.listProducts.run(this.pagination);
    })
    this.listProducts.done().subscribe(response => {
      this.products = response.content;
      console.log(response);
      this.totalElements = response.totalElements;
      this.router.navigate([], { 
        queryParams: {  currentPage: response.number, numberOfPages: response.totalPages },
        queryParamsHandling: 'merge'
      })
    })
    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(keyword => {
      this.router.navigate([], { 
        queryParams: { search: keyword.toLowerCase(), currentPage: 0 },
        queryParamsHandling: 'merge'
      })
    })
  }
}