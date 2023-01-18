export class Pagination {

    public search: string = '';
    public ordination: string = '';
    public page: number = 0;
    public size: number = 20;
    
    public constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}