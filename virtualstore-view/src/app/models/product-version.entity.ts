import { Color } from "./color.entity";
import { EntityBase } from "./entity-base.entity";
import { Stock } from "./stock.entity";

export class ProductVersion extends EntityBase {

    public color!: Color;
    public stock!: Stock;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}