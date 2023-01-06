import { HttpEventType, HttpResponse } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { ImageModel } from "src/app/models/image-model.entity";
import { UploadImageResource } from "src/app/resources/uploads-images/upload-image.resource";

const PERCENTAGE = 100;

@Injectable()
export class UploadImageService {

    private readonly upload: EventEmitter<ImageModel> = new EventEmitter<ImageModel>();
    private progress: number = 0;

    public constructor(
        private readonly toastr: ToastrService,
        private readonly uploadImage: UploadImageResource
    ) {}

    public done(): EventEmitter<ImageModel> { return this.upload; }

    public progressOf(): number { return this.progress }

    public run(image: FormData,): void {
        this.uploadImage.run(image).subscribe({
            next: (event) => {
                if(event.type === HttpEventType.UploadProgress) {
                    this.progress = Math.round(PERCENTAGE * event.loaded / event.total)
                } else if(event instanceof HttpResponse) {
                    this.progress = 0;
                    this.upload.emit(event.body);
                }
            }, error: (eventErr) => {
                this.toastr.error('O upload não foi realizado', 'Que triste! :(', { progressBar: true });
            }
        })
    }
}