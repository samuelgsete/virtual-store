import { EntityBase } from "./entity-base.entity";
import { ProductVersion } from "./product-version.entity";
import { Product } from "./product.entity";

export class ItemCart extends EntityBase {

    public quantity!: number;
    public subtotalIncash!: number;
    public subtotalInstallment!: number;
    public product!: Product;
    public productVersion!: ProductVersion;
    public isSelected: boolean = false;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
} 