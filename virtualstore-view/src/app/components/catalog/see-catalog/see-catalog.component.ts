import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ImageModel } from 'src/app/models/image-model.entity';
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
  protected ordinations: any[] = [
    { label: 'Mais relevantes', name: 'bestsellers' },
    { label: 'Melhores preços', name: 'cheaper' },
    { label: 'Maiores preços', name: 'moreexpensive' },
    { label: 'Maiores discontos', name: 'biggestdiscount' },
    { label: 'Mais recentes', name: 'latest' }
  ]
  protected pagination: Pagination = new Pagination();

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly listPaginate: ListProductsPaginateService
  ) {}

  protected orderBy(_ordination: string): void {
    this.router.navigate(['catalogo/ver'], { queryParams: { page: 0, ordination: _ordination, search: '' }})
  }

  protected seeDetailsProduct(code: string): void {
    this.router.navigate([`catalogo/produto/${code}`])
  }

  protected getMainImage(images: ImageModel[]): String {
    return images.filter(img => { return img.isMain })[0].url;
  }

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