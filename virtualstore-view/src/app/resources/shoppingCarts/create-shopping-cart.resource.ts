import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_REST_SERVER } from "../api-rest-url";
import { ShoppingCart } from 'src/app/models/shopping-cart.entity';

@Injectable()
export class CreateShoppingCartResource {

    private readonly baseUrl = API_REST_SERVER.localUrl.concat('/shopping-carts');

    public constructor(private readonly http: HttpClient) {}

    public run(newShoppingCart: ShoppingCart): Observable<any> {
        return this.http.post<ShoppingCart>(this.baseUrl, newShoppingCart);
    }
}