export class Pagination {

    public search: string = '';
    public ordination: string = '';
    public page: number = 0;
    public size: number = 20;
    public isFirstPage: boolean = true;
    public isLastPage: boolean = true;
    public totalElements: number = 0;
    
    public constructor(values: Object = {}) { 
        Object.assign(this, values);
    }
}