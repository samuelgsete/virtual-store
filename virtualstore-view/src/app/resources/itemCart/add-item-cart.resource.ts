import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_REST_SERVER } from "../api-rest-url";
import { ItemCart } from 'src/app/models/item-cart.entity';

@Injectable()
export class AddItemCartResource {

    private readonly baseUrl = API_REST_SERVER.localUrl.concat('/shopping-carts');

    public constructor(private readonly http: HttpClient) {}

    public run(cartId: number, itemCart: ItemCart): Observable<any> {
        return this.http.put<ItemCart>(this.baseUrl.concat(`/${cartId}/add-item`), itemCart);
    }
}