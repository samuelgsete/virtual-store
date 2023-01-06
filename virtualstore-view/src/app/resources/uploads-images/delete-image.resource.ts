import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_REST_SERVER } from "../api-rest-url";

@Injectable()
export class DeleteImageResource {

    private readonly baseUrl = API_REST_SERVER.localUrl.concat('/uploads/images/');

    public constructor(private readonly http: HttpClient) {}

    public run(nameImg: string): Observable<any> {
        return this.http.delete<any>(this.baseUrl.concat(nameImg));
    }
}