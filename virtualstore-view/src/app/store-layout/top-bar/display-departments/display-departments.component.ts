import { Component, OnInit } from '@angular/core';

import { Department } from 'src/app/models/department.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListDepartmentsPaginateService } from 'src/app/usecases/departments/list-departments-paginate.service';
import { DiplayProductsByDepartments } from 'src/app/usecases/products/display-products-by-departments.service';

@Component({
  selector: 'app-display-departments',
  templateUrl: './display-departments.component.html',
  styleUrls: ['./display-departments.component.css']
})
export class DisplayDepartmentsComponent implements OnInit {

  public departments: Department[] = [];

  public constructor(
    protected displayProducts: DiplayProductsByDepartments,
    private readonly listDepartments: ListDepartmentsPaginateService
  ) {}

  public ngOnInit(): void {
    this.listDepartments.run(new Pagination({ size: 50 }))
    this.listDepartments.done().subscribe(departments => {
      this.departments = departments
    })
  }
}