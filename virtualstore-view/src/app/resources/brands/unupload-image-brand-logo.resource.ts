import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UnuploadImageResource } from '../models/unupload-image.resource';

@Injectable()
export class UnuploadImageBrandLogoResource extends UnuploadImageResource {

    public constructor(private readonly http: HttpClient) {
        super('uploads/images')
    }

    public run(nameFile: string): Observable<any> {
        return this.http.delete<any>(this.getBaseUrl().concat(`/${nameFile}`));
    }
}