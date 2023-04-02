import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from "rxjs";

import { Color } from 'src/app/models/color.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListColorsPaginateService } from 'src/app/usecases/colors/list-colors-paginate.service';

@Component({
  selector: 'app-display-colors',
  templateUrl: './display-colors.component.html',
  styleUrls: ['./display-colors.component.css']
})
export class DisplayColorsComponent implements OnInit {
  
  protected colors: Color[] = [];
  protected pagination: Pagination = new Pagination({ size: 7 });
  protected formSearch: FormControl = new FormControl();

  public constructor(
    protected readonly route: ActivatedRoute,
    protected readonly router: Router,
    protected readonly listColors: ListColorsPaginateService
  ) {}

  public ngOnInit(): void {
    this.listColors.done().subscribe(response => {
      this.colors = response.content;
      this.router.navigate([], { 
        queryParams: {  currentPage: response.number, numberOfPages: response.totalPages },
        queryParamsHandling: 'merge'
      });
    })
    this.route.queryParams.subscribe(params => {
      let currentPage = params['currentPage'];
      let search = params['search'];
      this.pagination.page = currentPage;
      this.pagination.search = search;
      this.formSearch.patchValue(search);
      this.listColors.run(this.pagination);
    })
    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(keyword => {
      this.router.navigate([], { 
        queryParams: { search: keyword.toLowerCase() },
        queryParamsHandling: 'merge'
      });
    });
  }
}