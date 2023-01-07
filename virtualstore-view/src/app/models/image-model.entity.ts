import { EntityBase } from "./entity-base.entity";

export class ImageModel extends EntityBase {

    public randomName!: string;
    public originalName!: string;
    public url!: string;
    public width: number = 0;
    public height: number = 0;
    public size: number = 0;
    public isMain: boolean = false;
    public isSelected: boolean = false;
    public isDeleted: boolean = false;
    public uploadProgress: number = 0;
    public isUploaded: boolean = false;
 
    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}