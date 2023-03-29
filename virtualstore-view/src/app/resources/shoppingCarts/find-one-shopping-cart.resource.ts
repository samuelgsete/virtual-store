import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { API_REST_SERVER } from "../api-rest-url";
import { ShoppingCart } from "src/app/models/shopping-cart.entity";

@Injectable()
export class FindOneShoppingCartResource {

    private readonly baseUrl = API_REST_SERVER.localUrl.concat('/shopping-carts');

    public constructor(private readonly http: HttpClient) {}

    public run(id: number): Observable<ShoppingCart> {
        return this.http.get<ShoppingCart>(this.baseUrl.concat(`/${id}`));
    }
}