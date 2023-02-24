import { Injectable } from "@angular/core";

import { ImageModel } from "src/app/models/image-model.entity";

@Injectable()
export class DisplayMainImageService {

    public run(images: ImageModel[]): String {
        return images.filter(img => { return img.isMain })[0].url;
    }
}