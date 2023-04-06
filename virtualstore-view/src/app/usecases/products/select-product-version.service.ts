import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

import { ProductVersion } from "src/app/models/product-version.entity";

@Injectable()
export class SelectProductVersionService {

    public run(productVersion: ProductVersion, form: FormControl): void {
        form.patchValue(productVersion);
    }
}