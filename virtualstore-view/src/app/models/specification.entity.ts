import { EntityBase } from "./entity-base.entity";

export class Specification extends EntityBase {

    public name!: string;
    public value!: string;
    public isSelected: boolean = false;
    public isDeleted: boolean = false;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}