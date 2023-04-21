import { Injectable } from "@angular/core";

import { Category } from "src/app/models/category.entity";

@Injectable()
export class DeleteCategoryService {

    public run(deletedCategory: Category, categories: Category[]) {
        const index = categories.indexOf(deletedCategory);
        categories.splice(index, 1);
    }
}