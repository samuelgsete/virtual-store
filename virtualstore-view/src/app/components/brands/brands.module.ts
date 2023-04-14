import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBrandsPaginateResource } from 'src/app/resources/brands/list-brands-paginate.resource';
import { ListBrandsPaginateService } from 'src/app/usecases/brands/list-brands-paginate.service';
import { CreateBrandComponent } from './create-brand/create-brand.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OnLoadImageService } from 'src/app/usecases/uploads-images/on-load-image.service';
import { UploadBrandLogoComponent } from './upload-brand-logo/upload-brand-logo.component';
import { UnuploadImageBrandLogoService } from 'src/app/usecases/brands/unupload-image-brand-logo.service';
import { UnuploadImageBrandLogoResource } from 'src/app/resources/brands/unupload-image-brand-logo.resource';
import { CreateBrandService } from 'src/app/usecases/brands/create-brand.service';
import { CreateBrandResource } from 'src/app/resources/brands/create-brand.resource';
import { DisplayBrandsComponent } from './display-brands/display-brands.component';

@NgModule({
  declarations: [
    CreateBrandComponent,
    UploadBrandLogoComponent,
    DisplayBrandsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    CreateBrandService,
    CreateBrandResource,
    ListBrandsPaginateResource,
    ListBrandsPaginateService,
    OnLoadImageService,
    UnuploadImageBrandLogoService,
    UnuploadImageBrandLogoResource
  ]
})
export class BrandsModule {}