import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { Pagination } from "src/app/models/pagination.entity";
import { ListPaginateResource } from "../models/list-paginate.resource";

@Injectable()
export class ListProductsPaginateResource extends ListPaginateResource {

    public constructor(private readonly http: HttpClient) {
        super('products')
    }

    public run(pagination: Pagination): Observable<any> {
        const _params = new HttpParams()
            .set('search', pagination.search)
            .set('category', pagination.category)
            .set('ordination', pagination.ordination)
            .set('page', pagination.page)
            .set('size', pagination.size)

        return this.http.get<any>(this.getBaseUrl(), { params: _params });
    }
}