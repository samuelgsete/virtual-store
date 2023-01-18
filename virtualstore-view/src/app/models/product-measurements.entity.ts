import { EntityBase } from "./entity-base.entity";

export class ProductMeasurements extends EntityBase {
    
    public weight!: number;
    public width!: number;
    public height!: number;
    public diameter!: number;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}