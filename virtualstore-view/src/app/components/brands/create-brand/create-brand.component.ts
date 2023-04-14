import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateBrandService } from 'src/app/usecases/brands/create-brand.service';

import { UnuploadImageBrandLogoService } from 'src/app/usecases/brands/unupload-image-brand-logo.service';
import { UploadImageService } from 'src/app/usecases/uploads-images/upload-image.service';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {

  protected formBrand!: FormGroup;
  
  public constructor(
    protected readonly _fb: FormBuilder,
    protected readonly uploadImage: UploadImageService,
    protected readonly unuploadImage: UnuploadImageBrandLogoService,
    protected readonly createBrand: CreateBrandService,
  ) {}

  public ngOnInit(): void {
    this.formBrand = this._fb.group({
      id: [null],
      name: ['HiperX', [Validators.required, Validators.minLength(2), Validators.maxLength(64)]],
      website: ['https://row.hyperx.com/pt-br/', [Validators.required, Validators.maxLength(1024)]],
      urlLogo: ['', Validators.required]
    })
    this.uploadImage.done().subscribe(response => {
      this.formBrand['controls']['urlLogo'].patchValue(response.url)
    })
    this.unuploadImage.done().subscribe(response => {
      this.formBrand['controls']['urlLogo'].reset()
    })
  }
}