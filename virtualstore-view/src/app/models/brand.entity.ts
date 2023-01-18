import { EntityBase } from "./entity-base.entity";

export class Brand extends EntityBase {

    public name!: string;
    public website!: string;
    public urlLogo!: string;
   
    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}