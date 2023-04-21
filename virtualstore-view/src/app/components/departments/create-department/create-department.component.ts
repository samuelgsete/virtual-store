import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Category } from 'src/app/models/category.entity';
import { AddCategoryService } from 'src/app/usecases/categories/add-category.service';
import { CreateDepartmentService } from 'src/app/usecases/categories/create-department.service';
import { DeleteCategoryService } from 'src/app/usecases/categories/delete-category.service';
import { UpdateCategoryService } from 'src/app/usecases/categories/update-category.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  protected formDepartment: FormControl = new FormControl('Periféricos', {
    validators: [Validators.required, Validators.minLength(2), Validators.maxLength(32)]
  });
  protected formCategory: FormControl = new FormControl('', {
    validators: [Validators.required]
  })

  protected categories: Category[] = [];

  public constructor(
    protected readonly router: Router,
    protected readonly addCategory: AddCategoryService,
    protected readonly deleteCategory: DeleteCategoryService,
    protected readonly updateCategory: UpdateCategoryService,
    protected readonly createDepartment: CreateDepartmentService
  ) {}

  public ngOnInit(): void {
    this.createDepartment.done().subscribe(response => {
      this.router.navigateByUrl('departments');
    })
  }
}