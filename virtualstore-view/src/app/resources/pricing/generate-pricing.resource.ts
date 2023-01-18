import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_REST_SERVER } from "../api-rest-url";
import { Pricing } from 'src/app/models/pricing.entity';

@Injectable()
export class GeneratePricingResource {

    private readonly baseUrl = API_REST_SERVER.localUrl.concat('/pricing/generate');

    public constructor(
        private readonly http: HttpClient) {}

    public run(
        basePrice: number, 
        rateIncashDiscount: number, 
        rateInstallmentDiscount: number, 
        maxInstallment: number
    ): Observable<Pricing> 
    {
        const _params = new HttpParams()
            .set('basePrice', basePrice)
            .set('rateIncashDiscount', rateIncashDiscount)
            .set('rateInstallmentDiscount', rateInstallmentDiscount)
            .set('maxInstallment', maxInstallment)
        return this.http.get<Pricing>(this.baseUrl, { params: _params });
    }
}