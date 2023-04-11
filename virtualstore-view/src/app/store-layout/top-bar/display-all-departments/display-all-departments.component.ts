import { Component, OnInit } from '@angular/core';

import { Department } from 'src/app/models/department.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListDepartmentsPaginateService } from 'src/app/usecases/departments/list-departments-paginate.service';
import { DiplayProductsByDepartments } from 'src/app/usecases/products/display-products-by-departments.service';

@Component({
  selector: 'app-display-all-departments',
  templateUrl: './display-all-departments.component.html',
  styleUrls: ['./display-all-departments.component.css']
})
export class DisplayAllDepartmentsComponent implements OnInit {

  protected isVisible: boolean = !true;
  protected departments: Department[] = [];

  public constructor(
    protected readonly displayProducts: DiplayProductsByDepartments,
    protected readonly listDepartments: ListDepartmentsPaginateService
  ) {}
  
  public toggle(): void {
    this.isVisible = !this.isVisible;
  }

  public ngOnInit(): void {
    this.listDepartments.run(new Pagination({ size: 50 }))
    this.listDepartments.done().subscribe(departments => {
      this.departments = departments
    })
  }
}