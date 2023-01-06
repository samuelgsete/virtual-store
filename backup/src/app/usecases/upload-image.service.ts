import { HttpEventType, HttpResponse } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { Image } from "../models/image.entity";
import { UploadImageResource } from "../resources/upload-image.resource";

const PERCENTAGE = 100;

@Injectable()
export class UploadImageService {

    private upload: EventEmitter<Image> = new EventEmitter<Image>();
    public uploadedsImages: Image[] = [];
    public uploadProgress: number = 0;

    public constructor(
        private readonly toastr: ToastrService,
        private readonly uploadImage: UploadImageResource
    ) {}

    public toUpload(): EventEmitter<Image> { return this.upload; }

    public run(image: FormData): void {
        this.uploadImage.run(image).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress)
                this.uploadProgress = Math.round(PERCENTAGE * event.loaded/event.total);
            else if(event instanceof HttpResponse){
                let uploadedImage = event.body;
                this.uploadedsImages.push(uploadedImage);
                this.uploadedsImages[0].isMain = true;
                this.toastr.success('Upload concluído', 'Tudo ok!', { progressBar: true });
          }
        }, eventError => {
            this.toastr.error('Upload não conclúido', 'Algo deu errado :(', { progressBar: true });
        });
    }

}