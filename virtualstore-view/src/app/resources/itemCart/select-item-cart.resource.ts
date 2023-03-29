import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_REST_SERVER } from "../api-rest-url";
import { ItemCart } from 'src/app/models/item-cart.entity';

@Injectable()
export class SelectItemCartResource {

    private readonly baseUrl = API_REST_SERVER.localUrl.concat('/item-cart');

    public constructor(private readonly http: HttpClient) {}

    public run(id: number, itemCart: ItemCart): Observable<any> {
        return this.http.put<ItemCart>(this.baseUrl.concat(`/${id}/select`), itemCart);
    }
}