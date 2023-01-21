import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_REST_SERVER } from "../api-rest-url";
import { Product } from 'src/app/models/product.entity';

@Injectable()
export class CreateProductResource {

    private readonly baseUrl = API_REST_SERVER.localUrl.concat('/products');

    public constructor(private readonly http: HttpClient) {}

    public run(product: Product): Observable<any> {
        return this.http.post<Product>(this.baseUrl, product);
    }
}