import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Brand } from 'src/app/models/brand.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListBrandsPaginateService } from 'src/app/usecases/brands/list-brands-paginate.service';

@Component({
  selector: 'app-display-brands',
  templateUrl: './display-brands.component.html',
  styleUrls: ['./display-brands.component.css']
})
export class DisplayBrandsComponent implements OnInit {

  protected brands: Brand[] = [];
  protected pagination: Pagination = new Pagination({ size: 7 });
  protected formSearch: FormControl = new FormControl();
  protected totalElements: number = 0;

  public constructor(
    protected readonly route: ActivatedRoute,
    protected readonly router: Router,
    protected listBrands: ListBrandsPaginateService
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let currentPage = params['currentPage'];
      let search = params['search'] || '';
      this.pagination.page = currentPage;
      this.pagination.search = search;
      this.listBrands.run(this.pagination);
    })
    this.listBrands.done().subscribe(response => {
      this.brands = response.content;
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