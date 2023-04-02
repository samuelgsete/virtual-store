import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class DiplayProductsByDepartments {

    public constructor(private readonly router: Router) {}

    public run(department: string, category: string): void {
        this.router.navigate(['store/catalog'], { queryParams: { 
            department: department, 
            category: category, 
            ordination: '',
            search: '',
            page: ''
          }})
    }
}