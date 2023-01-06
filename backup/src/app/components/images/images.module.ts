import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImagesComponent } from './upload-images/upload-images.component';
import { UploadImageResource } from 'src/app/resources/upload-image.resource';
import { UploadImageService } from 'src/app/usecases/upload-image.service';

@NgModule({
  declarations: [
    UploadImagesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UploadImageResource,
    UploadImageService
  ]
})
export class ImagesModule {}
