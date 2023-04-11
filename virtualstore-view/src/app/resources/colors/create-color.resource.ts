import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Color } from "src/app/models/color.entity";
import { CreateResource } from "../models/create.resource";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CreateColorResource extends CreateResource<Color> {

    public constructor(private readonly http: HttpClient) {
        super('colors')
    }

    public run(color: Color): Observable<any> {
        return this.http.post<any>(this.getBaseUrl(), color);
    }
}