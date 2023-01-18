import { EntityBase } from "./entity-base.entity";

export class Category extends EntityBase {

    public name!: string;
    public totalProducts!: number;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}