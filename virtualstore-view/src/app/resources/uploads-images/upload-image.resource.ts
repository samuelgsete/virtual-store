import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_REST_SERVER } from 'src/app/resources/api-rest-url';

@Injectable()
export class UploadImageResource {

    protected localUrl: string = API_REST_SERVER.localUrl.concat('/uploads/images')

    public constructor(protected readonly http: HttpClient) {}

    public run(image: FormData): Observable<any> {
        return this.http.post<any>(this.localUrl, image);
    }
}