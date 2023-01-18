import { Brand } from "./brand.entity";
import { Category } from "./category.entity";
import { Color } from "./color.entity";
import { EntityBase } from "./entity-base.entity";
import { Pricing } from "./pricing.entity";
import { ProductCondition } from "./product-condition.enum";
import { ProductMeasurements } from "./product-measurements.entity";
import { Specification } from "./specification.entity";

export class Product extends EntityBase {

    public code!: string;
    public name!: string;
    public model!: string;
    public line!: string;
    public warranty!: number;
    public stock!: number;
    public soldUnits!: number;
    public freeDelivery!: boolean;
    public justReleased!: boolean;
    public ratingAverage!: number;
    public productCondition!: ProductCondition;
    public contentPackaging!: string;
    public isActive!: boolean;
    public eanCode!: string;
    public details!: string;
    public pricing!: Pricing;
    public measurements!: ProductMeasurements;
    public brand!: Brand;
    public offeredAt!: Date;
    public updatedAt!: Date;
    public colors: Color[] = [];
    public category!: Category;
    public specification: Specification[] = []

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}