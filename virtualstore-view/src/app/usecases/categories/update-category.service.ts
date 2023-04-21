import { Injectable } from "@angular/core";
import { MatChipEditedEvent } from "@angular/material/chips";

import { Category } from "src/app/models/category.entity";

@Injectable()
export class UpdateCategoryService {

    public run(event: MatChipEditedEvent, category: Category, categories: Category[],) {
        const value = event.value.trim();
        const index = categories.indexOf(category);
        if(!value) {
            categories.splice(index, 1);
        }
        if(index >= 0) {
            categories[index].name = value;
        }
    }
}