import { Injectable } from "@angular/core";

import { UploadImageService } from "./upload-image.service";

@Injectable()
export class OnFilesDroppedService {

    public constructor(protected readonly upload: UploadImageService) {}

    public run(files: any[]): void {
        for(const file of files) { 
            let formData = new FormData();
            formData.append('img', file, file.name);
            this.upload.run(formData);
        }
    }
}