import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Department } from 'src/app/models/department.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListDepartmentsPaginateService } from 'src/app/usecases/departments/list-departments-paginate.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  protected departments: Department[] = []
  
  public constructor(
    protected readonly router: Router,
    private readonly listDepartments: ListDepartmentsPaginateService
  ) {}

  protected navigateBy(department: string, category: string): void {
    this.router.navigate(['catalog'], { queryParams: { 
      department: department, 
      category: category, 
      ordination: '',
      search: '',
      page: ''
    }})
  }

  public ngOnInit(): void {
    /*this.listDepartments.run(new Pagination({ size: 50 }))
    this.listDepartments.done().subscribe(departments => {
      this.departments = departments
    })*/
  }
}