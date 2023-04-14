import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { CreateResource } from "../models/create.resource";
import { Brand } from "src/app/models/brand.entity";

@Injectable()
export class CreateBrandResource extends CreateResource<Brand> {

    public constructor(private readonly http: HttpClient) {
        super('brands')
    }

    public override run(brand: Brand): Observable<any> {
        return this.http.post<any>(this.getBaseUrl(), brand);
    }
}