import { Brand } from "./brand.entity";
import { Category } from "./category.entity";
import { EntityBase } from "./entity-base.entity";
import { ImageModel } from "./image-model.entity";
import { Pricing } from "./pricing.entity";
import { ProductCondition } from "./product-condition.enum";
import { ProductMeasurements } from "./product-measurements.entity";
import { ProductVersion } from "./product-version.entity";
import { Specification } from "./specification.entity";

export class Product extends EntityBase {

    public code!: string;
    public name!: string;
    public model!: string;
    public line!: string;
    public warranty!: number;
    public soldUnits!: number;
    public freeDelivery!: boolean;
    public justReleased!: boolean;
    public ratingAverage!: number;
    public numberOfRaters!: number;
    public productCondition!: ProductCondition;
    public contentPackaging!: string;
    public isActive!: boolean;
    public eanCode!: string;
    public details!: string;
    public pricing!: Pricing;
    public measurements!: ProductMeasurements;
    public brand!: Brand;
    public category!: Category;
    public specifications: Specification[] = [];
    public productVersions: ProductVersion[] = [];
    public images: ImageModel[] = []

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}