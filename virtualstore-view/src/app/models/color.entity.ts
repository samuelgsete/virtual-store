import { EntityBase } from "./entity-base.entity";

export class Color extends EntityBase {

    public name!: string
    public hexCode!: string
    public isSelected!: boolean;
    public isAdded: boolean = false;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}