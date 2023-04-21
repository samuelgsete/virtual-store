import { Injectable } from "@angular/core";
import { MatChipInputEvent } from "@angular/material/chips";

import { Category } from "src/app/models/category.entity";

@Injectable()
export class AddCategoryService {

    public run(event: MatChipInputEvent, categories: Category[],) {
        const value = (event.value || '').trim();
        const category = new Category({
            id: null,
            name: value,
            totalProducts: 0
        })
        // Add our keyword
        if(value) {
            categories.push(category);
        }
        // Clear the input value
        event.chipInput!.clear();
    }
}