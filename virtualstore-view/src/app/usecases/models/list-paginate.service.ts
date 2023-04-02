import { EventEmitter } from "@angular/core";
import { Pagination } from "src/app/models/pagination.entity";

export abstract class ListPaginateService {

    protected readonly complete: EventEmitter<any> = new EventEmitter<any>();
    protected emptyData: boolean = false;
   
    public done(): EventEmitter<any> { return this.complete }

    public isEmpty(): boolean { return this.emptyData }

    public abstract run(pagination: Pagination): void;
}