import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemCart } from 'src/app/models/item-cart.entity';
import { AddChildResource } from '../models/add-child.resource';

@Injectable()
export class AddItemCartResource extends AddChildResource<ItemCart> {

    public constructor(private readonly http: HttpClient) { super('shopping-carts'); }

    public run(cartId: number, itemCart: ItemCart): Observable<any> {
        return this.http.put<ItemCart>(this.getBaseUrl().concat(`/${cartId}/add-item`), itemCart);
    }
}