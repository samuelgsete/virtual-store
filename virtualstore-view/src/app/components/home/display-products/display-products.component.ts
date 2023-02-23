import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ImageModel } from 'src/app/models/image-model.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { Product } from 'src/app/models/product.entity';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css'],
  providers: [ListProductsPaginateService]
})
export class DisplayProductsComponent implements OnInit, OnDestroy {

  @Input() public title: string = '';
  @Input() public ordination: string = '';
  protected products: Product[] = [];
  protected pagination: Pagination = new Pagination();

  public constructor(
    private readonly router: Router,
    private readonly listPaginate: ListProductsPaginateService
  ) {}
    
  protected seeDetailsProduct(code: string): void {
    this.router.navigate([`catalogo/produto/${code}`])
  }

  protected getMainImage(images: ImageModel[]): String {
    return images.filter(img => { return img.isMain })[0].url;
  }

  protected scrollTo(element: HTMLElement, scrollValue: number): void {
    element.scrollLeft += scrollValue;
  }

  public ngOnInit(): void {
    this.pagination.ordination = this.ordination;
    this.listPaginate.run(this.pagination);
    this.listPaginate.done().subscribe(response => {
      this.products = response.content;
    });
  }

  public ngOnDestroy(): void {
    this.listPaginate.done().unsubscribe();
    this.products = [];
  }
}