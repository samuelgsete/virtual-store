import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ListColorsPaginateResource } from 'src/app/resources/colors/list-colors-paginate.resource';
import { ListColorsPaginateService } from 'src/app/usecases/colors/list-colors-paginate.service';
import { AddColorComponent } from './add-color/add-color.component';

@NgModule({
  declarations: [
    AddColorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AddColorComponent
  ],
  providers: [
    ListColorsPaginateResource,
    ListColorsPaginateService
  ]
})
export class ColorsModule {}