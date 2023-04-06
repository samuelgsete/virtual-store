import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Product } from "src/app/models/product.entity";
import { FindProductByUniqueCodeResource } from "src/app/resources/products/find-product-by-unique-code.resource";
import { findByCodeService } from "../models/find-by-code.service";

@Injectable()
export class FindProductByUniqueCodeService extends findByCodeService<Product> {
    
    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly findOne: FindProductByUniqueCodeResource
    ) { super() }

    public run(code: string) {
        this.spinner.show();
        this.findOne.run(code).subscribe({
            next: (response) => {
                this.spinner.hide();
                this.progress = true;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.progress = true;
                this.toastr.error('Não foi possível buscar o produto', 'Há não :(', { progressBar: true });
            }
        })
    }
}