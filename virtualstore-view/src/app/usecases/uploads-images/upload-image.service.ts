import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { ImageModel } from "src/app/models/image-model.entity";
import { UploadImageResource } from "src/app/resources/uploads-images/upload-image.resource";

@Injectable()
export class UploadImageService {

    private readonly upload: EventEmitter<ImageModel> = new EventEmitter<ImageModel>();
    private uploadProgress: boolean = false;
    
    public constructor(
        private readonly toastr: ToastrService,
        private readonly uploadImage: UploadImageResource
    ) {}

    public done(): EventEmitter<ImageModel> { return this.upload; }

    public progress(): boolean { return this.uploadProgress; }

    public run(image: FormData): void {
        this.uploadProgress = true;
            this.uploadImage.run(image).subscribe({
                next: (response) => {
                    this.upload.emit(response)
                }, error: (eventErr) => {
                    this.toastr.error('O upload não foi realizado', 'Que triste! :(', { progressBar: true });
                }
            }).add(() => {
                this.uploadProgress = false;
            })
    }
}