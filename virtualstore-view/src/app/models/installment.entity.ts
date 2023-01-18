import { EntityBase } from "./entity-base.entity";

export class Installment extends EntityBase {

    public amount!: number;
    public quantity!: number;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}