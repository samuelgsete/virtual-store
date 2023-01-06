export class EntityBase {
    
    public id!: number

    public constructor(values: Object = {}) { Object.assign(this, values) }
}