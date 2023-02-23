import { Component, OnDestroy, OnInit } from '@angular/core';

import { Brand } from 'src/app/models/brand.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListBrandsPaginateService } from 'src/app/usecases/brands/list-brands-paginate.service';

@Component({
  selector: 'app-display-brands',
  templateUrl: './display-brands.component.html',
  styleUrls: ['./display-brands.component.css'],
  providers: [ListBrandsPaginateService]
})
export class DisplayBrandsComponent implements OnInit, OnDestroy {

  protected title: string = 'Temos as melhores Marcas';
  protected brands: Brand[] = [];

  public constructor(private readonly listPaginate: ListBrandsPaginateService) {}

  protected goTo(url: string): void { window.open(`https://${url}`); }

  protected scrollTo(element: HTMLElement, scrolValue: number): void {
    element.scrollLeft += scrolValue;
  }
    
  public ngOnInit(): void {
    this.listPaginate.run(new Pagination());
    this.listPaginate.done().subscribe(createdsBrands => {
      this.brands = createdsBrands;
    })
  }

  public ngOnDestroy(): void {
    this.listPaginate.done().unsubscribe();
    this.brands = [];
  }
}