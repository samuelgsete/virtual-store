import { EntityBase } from "./entity-base.entity";
import { ItemCart } from "./item-cart.entity";
import { ResumeCart } from "./resume-cart.entity";

export class ShoppingCart extends EntityBase {

    public resumeCart: ResumeCart = new ResumeCart();
    public items: ItemCart[] = [];

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}