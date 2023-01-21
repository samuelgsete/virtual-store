import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { ImageModel } from 'src/app/models/image-model.entity';
import { DeleteManyImagesService } from 'src/app/usecases/uploads-images/delete-many-images.service';
import { DeleteImageService } from 'src/app/usecases/uploads-images/delete-image.service';
import { UploadImageService } from 'src/app/usecases/uploads-images/upload-image.service';
import { OnFilesDroppedService } from 'src/app/usecases/uploads-images/on-files-dropped.service';
import { OnLoadFilesService } from 'src/app/usecases/uploads-images/on-load-files.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  protected images: ImageModel[] = [];
  protected readonly maxSizeUploads: number = 1;
  
  public constructor(
    protected readonly upload: UploadImageService,
    protected readonly deleteImage: DeleteImageService,
    protected readonly deleteManyImages: DeleteManyImagesService,
    protected readonly onFilesDropped: OnFilesDroppedService,
    protected readonly onLoadFiles: OnLoadFilesService
  ) {}

  public getImages(): ImageModel[] { return this.images }
  
  protected getSelectedImages(): ImageModel[] {
    return this.images.filter(img => { return img.isSelected; });
  }

  protected selectImage(image: ImageModel, isSelected: boolean): void {
    image.isSelected = isSelected;
  }

  protected orderImages(event: CdkDragDrop<ImageModel[]>): void {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
    const img = this.images.filter(img => { return img.isMain })[0]
    img.isMain = false;
    this.setMainImage();
  }

  protected setMainImage(): void { 
    if(this.images[0] != null || this.images[0] != undefined) {
      this.images[0].isMain = true;
    }
  }

  public ngOnInit(): void {
    this.upload.done().subscribe(uploadedImage => {
      this.images.push(uploadedImage);
      this.setMainImage();
    })
    this.deleteImage.done().subscribe(index => {
      this.images.splice(index, 1);
      this.setMainImage();
    })
    this.deleteManyImages.done().subscribe(deletedImages => {
      this.images = this.images.filter(image => { return !image.isDeleted })
      this.setMainImage();
    })
  }
}