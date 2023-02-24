import { Category } from "./category.entity";
import { EntityBase } from "./entity-base.entity";

export class Department extends EntityBase {

    public name!: string;
    public categories: Category[] = [];
    public isActive: boolean = false;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}