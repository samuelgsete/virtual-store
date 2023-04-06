import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ItemCart } from 'src/app/models/item-cart.entity';
import { UpdateResource } from '../models/update.resource';

@Injectable()
export class UpdatedQuantityItemCartResource extends UpdateResource<ItemCart> {

    public constructor(private readonly http: HttpClient) { super('item-cart') }

    public run(id: number, itemCart: ItemCart): Observable<any> {
        return this.http.put<ItemCart>(this.getBaseUrl().concat(`/${id}/quantity`), itemCart);
    }
}