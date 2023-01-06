import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable()
export class UploadImageResource {

    private baseUrl: string = environment.mainUrl.concat("uploads/images");

    public constructor(private readonly http: HttpClient) {}

    public run(image: FormData): Observable<any> {
        return this.http.post<any>(this.baseUrl.concat("/upload"), image, {
            reportProgress: true,
            observe: "events",
            responseType: 'json'
        });
    }
}