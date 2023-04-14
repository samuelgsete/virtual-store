import { Component, OnInit } from '@angular/core';

import { UnuploadImageBrandLogoService } from 'src/app/usecases/brands/unupload-image-brand-logo.service';
import { OnLoadImageService } from 'src/app/usecases/uploads-images/on-load-image.service';
import { UploadImageService } from 'src/app/usecases/uploads-images/upload-image.service';

@Component({
  selector: 'app-upload-brand-logo',
  templateUrl: './upload-brand-logo.component.html',
  styleUrls: ['./upload-brand-logo.component.css']
})
export class UploadBrandLogoComponent implements OnInit {

  protected name: string = '';
  protected url: string = '';
  protected isUploaded: boolean = false;

  public constructor(
    protected readonly uploadImage: UploadImageService,
    protected readonly onLoadImage: OnLoadImageService,
    protected readonly unUploadImage: UnuploadImageBrandLogoService
  ) {}

  public ngOnInit(): void {
    this.uploadImage.done().subscribe(response => {
      this.isUploaded = true;
      this.name = response.randomName;
      this.url = response.url
    })
    this.unUploadImage.done().subscribe(response => {
      this.isUploaded = false;
    })
  }
}