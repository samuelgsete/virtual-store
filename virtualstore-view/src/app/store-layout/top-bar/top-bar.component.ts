import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { Department } from 'src/app/models/department.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { Product } from 'src/app/models/product.entity';
import { ListDepartmentsPaginateService } from 'src/app/usecases/departments/list-departments-paginate.service';
import { ListProductsPaginateService } from 'src/app/usecases/products/list-products-paginate.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  protected search: FormControl = new FormControl('');
  public routes: any[] = [
    { name: 'Loja', icon: 'store', path: '' },
    { name: 'Favoritos', icon: 'favorite', path: '' },
    { name: 'Carrinho', icon: 'shopping_cart', path: '' }
  ]
  protected departments: Department[] = []
  protected products: Product[] = []
 
  public constructor(
    private readonly router: Router,
    private readonly listDepartments: ListDepartmentsPaginateService,
    private readonly listProducts: ListProductsPaginateService
  ) {}

  protected navigateByCategory(category: string): void {
    this.router.navigate(['catalogo/ver'], { queryParams: { page: 0, ordination: 'category', search: category }})
  }

  public navigateByProductName(name: string): void {
    this.router.navigate(['catalogo/ver'], { queryParams: { search: name.toLowerCase() }});
  }

  public displayFn(product: Product): string {
    return product.name;
  }

  public ngOnInit(): void {
    this.listDepartments.run(new Pagination({ size: 50 }))
    this.listDepartments.done().subscribe(departments => {
      this.departments = departments
    })
    this.search.valueChanges.pipe(debounceTime(700)).subscribe(_search => {
      this.listProducts.run(new Pagination({ search: _search.toLowerCase() }))
    })
    this.listProducts.done().subscribe(response => {
      this.products = response.content
    })
  }
}