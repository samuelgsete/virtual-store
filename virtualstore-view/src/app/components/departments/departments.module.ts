import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ListDepartmentsPaginateResource } from 'src/app/resources/departments/list-departments-paginate.resource';
import { ListDepartmentsPaginateService } from 'src/app/usecases/departments/list-departments-paginate.service';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { AddCategoryService } from 'src/app/usecases/categories/add-category.service';
import { DeleteCategoryService } from 'src/app/usecases/categories/delete-category.service';
import { UpdateCategoryService } from 'src/app/usecases/categories/update-category.service';
import { CreateDepartmentResource } from 'src/app/resources/departments/create-department.resource';
import { CreateDepartmentService } from 'src/app/usecases/categories/create-department.service';
import { DisplayDepartmentsComponent } from './display-departments/display-departments.component';

@NgModule({
  declarations: [
    CreateDepartmentComponent,
    DisplayDepartmentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    ListDepartmentsPaginateResource,
    ListDepartmentsPaginateService,
    AddCategoryService,
    DeleteCategoryService,
    UpdateCategoryService,
    CreateDepartmentResource,
    CreateDepartmentService
  ]
})
export class DepartmentsModule {}