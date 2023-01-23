import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
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

  @ViewChild(MatMenuTrigger) 
  protected trigger!: MatMenuTrigger;

  public routes: any[] = [
    { icon: 'store', path: '' },
    { icon: 'favorite', path: '' },
    { icon: 'shopping_cart', path: '' }
  ]
  protected departments: Department[] = []

  public constructor(
    private readonly router: Router,
    private readonly listDepartments: ListDepartmentsPaginateService
  ) {}

  protected navigateByCategory(category: string): void {
    this.router.navigate(['catalogo/ver'], { queryParams: { page: 0, ordination: 'category', search: category }})
  }

  protected openMenu(): void {
    this.trigger.openMenu();
  }

  protected closeMenu(): void {
    this.trigger.closeMenu();
  }

  public ngOnInit(): void {
    this.listDepartments.run(new Pagination({ size: 50 }))
    this.listDepartments.done().subscribe(departments => {
      this.departments = departments
    })
  }
}