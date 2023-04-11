import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ListColorsPaginateResource } from 'src/app/resources/colors/list-colors-paginate.resource';
import { ListColorsPaginateService } from 'src/app/usecases/colors/list-colors-paginate.service';
import { AddColorComponent } from './add-color/add-color.component';
import { DisplayColorsComponent } from './display-colors/display-colors.component';
import { CreateColorComponent } from './create-color/create-color.component';
import { SetHexCodeService } from 'src/app/usecases/colors/set-hex-code.service';
import { CreateColorResource } from 'src/app/resources/colors/create-color.resource';
import { CreateColorService } from 'src/app/usecases/colors/create-color.service';

@NgModule({
  declarations: [
    AddColorComponent,
    DisplayColorsComponent,
    CreateColorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AddColorComponent,
    DisplayColorsComponent
  ],
  providers: [
    ListColorsPaginateResource,
    ListColorsPaginateService,
    SetHexCodeService,
    CreateColorResource,
    CreateColorService
  ]
})
export class ColorsModule {}