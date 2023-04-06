import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemCart } from 'src/app/models/item-cart.entity';
import { DeleteResource } from '../models/delete.resource';

@Injectable()
export class DeleteItemCartResource extends DeleteResource<ItemCart> {

    public constructor(private readonly http: HttpClient) {
        super('item-cart')
    }

    public run(id: number, itemCart: ItemCart): Observable<ItemCart> {
        return this.http.delete<ItemCart>(this.getBaseUrl().concat(`/${id}`), {
            body: itemCart
        });
    }
}