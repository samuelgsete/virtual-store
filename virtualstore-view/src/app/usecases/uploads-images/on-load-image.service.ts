import { Injectable } from "@angular/core";
import { UploadImageService } from "./upload-image.service";

@Injectable()
export class OnLoadImageService {

    public constructor(protected readonly upload: UploadImageService) {}
    
    public run(event: any): void {
        const file = event.target.files[0];
        let formData = new FormData();
        formData.append('img', file, file.name);
        this.upload.run(formData);
    }
}