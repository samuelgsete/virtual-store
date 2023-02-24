import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class DisplayDetailsProductService {

    public constructor(private readonly router: Router) {}

    public run(code: string): void {
        this.router.navigate([`catalogo/produto/${code}`])
    }
}