import { EntityBase } from "./entity-base.entity";

export class Stock extends EntityBase {

    public availableUnits: number = 0;
   
    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}