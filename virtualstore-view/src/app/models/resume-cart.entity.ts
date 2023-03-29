import { EntityBase } from "./entity-base.entity";

export class ResumeCart extends EntityBase {

    public subtotalIncash!: number;
    public subtotalInstallment!: number;
    public incashDiscount!: number;
    public maxInstallment!: number;

    public constructor(values: Object = {}) { 
        super();
        Object.assign(this, values);
    }
}