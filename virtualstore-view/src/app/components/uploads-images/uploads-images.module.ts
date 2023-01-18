import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageComponent } from './upload-image/upload-image.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropUploadDirective } from 'src/app/directives/drag-drop-upload.directive';
import { UploadImageResource } from 'src/app/resources/uploads-images/upload-image.resource';
import { UploadImageService } from 'src/app/usecases/uploads-images/upload-image.service';
import { DeleteImageResource } from 'src/app/resources/uploads-images/delete-image.resource';
import { DeleteImageService } from 'src/app/usecases/uploads-images/delete-image.service';
import { DeleteManyImagesResource } from 'src/app/resources/uploads-images/delete-many-images.resource';
import { DeleteManyImagesService } from 'src/app/usecases/uploads-images/delete-many-images.service';
import { OnFilesDroppedService } from 'src/app/usecases/uploads-images/on-files-dropped.service';
import { OnLoadFilesService } from 'src/app/usecases/uploads-images/on-load-files.service';

@NgModule({
  declarations: [
    UploadImageComponent,
    DragDropUploadDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DragDropUploadDirective,
    UploadImageComponent
  ],
  providers: [
    DeleteImageResource,
    UploadImageResource,
    DeleteImageService,
    UploadImageService,
    DeleteManyImagesService,
    DeleteManyImagesResource,
    OnFilesDroppedService,
    OnLoadFilesService
  ]
})
export class UploadsImagesModule {}