import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Product } from "src/app/models/product.entity";
import { FindByUniqueCodeResource } from "../models/find-by-unique-code.resource";

@Injectable()
export class FindProductByUniqueCodeResource extends FindByUniqueCodeResource<Product> {

    public constructor(private readonly http: HttpClient) {
        super('products'); 
    }

    public run(code: string): Observable<Product> {
        return this.http.get<any>(this.getBaseUrl().concat(`/${code}`));
    }
}