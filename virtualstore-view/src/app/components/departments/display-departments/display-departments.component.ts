import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Department } from 'src/app/models/department.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListDepartmentsPaginateService } from 'src/app/usecases/departments/list-departments-paginate.service';

@Component({
  selector: 'app-display-departments',
  templateUrl: './display-departments.component.html',
  styleUrls: ['./display-departments.component.css']
})
export class DisplayDepartmentsComponent implements OnInit {

  protected departments: Department[] = [];
  protected pagination: Pagination = new Pagination({ size: 7 });
  protected formSearch: FormControl = new FormControl();
  protected totalElements: number = 0;

  public constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly listDepartments: ListDepartmentsPaginateService
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let currentPage = params['currentPage'];
      let search = params['search'] || '';
      this.pagination.page = currentPage;
      this.pagination.search = search;
      this.listDepartments.run(this.pagination);
    })
    this.listDepartments.done().subscribe(response => {
      this.departments = response.content;
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