import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { API_REST_SERVER } from "../api-rest-url";
import { Product } from "src/app/models/product.entity";

@Injectable()
export class FindByUniqueCodeResource {

    private readonly baseUrl = API_REST_SERVER.localUrl.concat('/products');

    public constructor(private readonly http: HttpClient) {}

    public run(code: string): Observable<Product> {
        return this.http.get<any>(this.baseUrl.concat(`/${code}`));
    }
}