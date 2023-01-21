import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { API_REST_SERVER } from "../api-rest-url";
import { Pagination } from "src/app/models/pagination.entity";

@Injectable()
export class ListProductsPaginateResource {

    private readonly baseUrl = API_REST_SERVER.localUrl.concat('/products');

    public constructor(private readonly http: HttpClient) {}

    public run(pagination: Pagination): Observable<any> {
        const _params = new HttpParams()
            .set('search', pagination.search)
            .set('ordination', pagination.ordination)
            .set('page', pagination.page)
            .set('size', pagination.size)

        return this.http.get<any>(this.baseUrl, { params: _params });
    }
}