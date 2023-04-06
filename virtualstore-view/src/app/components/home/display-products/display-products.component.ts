import { Component, Input, OnInit } from '@angular/core';

import { Pagination } from 'src/app/models/pagination.entity';
import { Product } from 'src/app/models/product.entity';
import { ScrollToService } from 'src/app/shared/services/scroll-to.service';
import { GoToCheckoutProductService } from 'src/app/usecases/products/go-to-checkout-product.service';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css'],
  providers: [ListProductsPaginateService]
})
export class DisplayProductsComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public ordination: string = '';
  protected products: Product[] = [];
  protected pagination: Pagination = new Pagination();

  public constructor(
    protected readonly listPaginate: ListProductsPaginateService,
    protected readonly goToCheckoutProduct: GoToCheckoutProductService,
    protected readonly scrollTo: ScrollToService
  ) {}
    
  public ngOnInit(): void {
    this.pagination.ordination = this.ordination;
    this.listPaginate.run(this.pagination);
    this.listPaginate.done().subscribe(response => {
      this.products = response.content;
    });
  }
}