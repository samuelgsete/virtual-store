export class EntityBase {
    
    public id!: number;
    public createdAt!: Date;
    public updatedAt!: Date;

    public constructor(values: Object = {}) { Object.assign(this, values) }
}