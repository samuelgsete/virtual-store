import { EntityBase } from "./entity-base.entity";

export class ImageModel extends EntityBase {

    public randomName!: string;
    public originalName!: string;
    public url!: string;
    public width!: number;
    public height!: number;
    public size!: number;
    public isMain: boolean = false;
    public isSelected: boolean = false;
    public isDeleted: boolean = false;
    public uploadPorgress: number = 0;
 
    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}