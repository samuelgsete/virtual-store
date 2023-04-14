import { Injectable } from "@angular/core";

import { OnFilesDroppedService } from "./on-files-dropped.service";

@Injectable()
export class OnLoadFilesService {

    public constructor(private readonly onFilesDropped: OnFilesDroppedService) {}
    
    public run(event: any): void {
        const files = event.target.files;
        this.onFilesDropped.run(files);
    }
}