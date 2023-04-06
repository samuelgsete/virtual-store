import { Component, OnInit } from '@angular/core';

import { Brand } from 'src/app/models/brand.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { GoToWebsiteService } from 'src/app/shared/services/go-to-website.service';
import { ScrollToService } from 'src/app/shared/services/scroll-to.service';
import { ListBrandsPaginateService } from 'src/app/usecases/brands/list-brands-paginate.service';

@Component({
  selector: 'app-display-brands',
  templateUrl: './display-brands.component.html',
  styleUrls: ['./display-brands.component.css'],
  providers: [ListBrandsPaginateService]
})
export class DisplayBrandsComponent implements OnInit {

  protected title: string = 'Temos as melhores Marcas';
  protected brands: Brand[] = [];

  public constructor(
    protected readonly goToWebsite: GoToWebsiteService,
    protected readonly scroll: ScrollToService,
    protected readonly listPaginate: ListBrandsPaginateService
  ) {}
    
  public ngOnInit(): void {
    this.listPaginate.run(new Pagination());
    this.listPaginate.done().subscribe(createdsBrands => {
      this.brands = createdsBrands;
    })
  }
}