import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDepartmentsPaginateResource } from 'src/app/resources/departments/list-departments-paginate.resource';
import { ListDepartmentsPaginateService } from 'src/app/usecases/departments/list-departments-paginate.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ListDepartmentsPaginateResource,
    ListDepartmentsPaginateService
  ]
})
export class DepartmentsModule {}