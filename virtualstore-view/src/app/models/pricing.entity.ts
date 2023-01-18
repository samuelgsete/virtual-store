import { EntityBase } from "./entity-base.entity";
import { Installment } from "./installment.entity";

export class Pricing extends EntityBase {

    public basePrice: number = 0.0;
    public incashPrice: number = 0.0;
    public installmentPrice: number = 0.0;
    public rateInstallmentDiscount: number = 0.0;
    public rateIncashDiscount: number = 0.0;
    public incashDiscount: number = 0.0;
    public installmentDiscount: number = 0.0;
    public maxInstallment: number = 1;
    public installments: Installment[] = [];

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}