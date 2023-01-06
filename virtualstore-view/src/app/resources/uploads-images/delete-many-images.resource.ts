import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_REST_SERVER } from "../api-rest-url";
import { ImageModel } from 'src/app/models/image-model.entity';

@Injectable()
export class DeleteManyImagesResource {

    private readonly baseUrl = API_REST_SERVER.localUrl.concat('/uploads/images/all');

    public constructor(private readonly http: HttpClient) {}

    public run(images: ImageModel[]): Observable<any> {
        return this.http.delete<any>(this.baseUrl, {
            body: images
        });
    }
}