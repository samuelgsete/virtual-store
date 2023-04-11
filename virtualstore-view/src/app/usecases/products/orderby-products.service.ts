import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class OrderByProductsService {

    public ordinations: any[] = [
        { label: 'Mais relevantes', name: 'bestsellers' },
        { label: 'Melhores preços', name: 'cheaper' },
        { label: 'Maiores preços', name: 'moreexpensive' },
        { label: 'Maiores discontos', name: 'biggestdiscount' },
        { label: 'Mais recentes', name: 'latest' }
    ]

    public constructor(private readonly router: Router) {}

    public run(ordination: any, route: string): void {
        this.router.navigate([`${route}`], { queryParams: { ordination: ordination.name }, queryParamsHandling: "merge" })
    }
}