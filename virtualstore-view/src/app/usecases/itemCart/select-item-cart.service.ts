import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { ItemCart } from "src/app/models/item-cart.entity";
import { SelectItemCartResource } from "src/app/resources/itemCart/select-item-cart.resource";
import { UpdateOneService } from "../models/update-one.service";

@Injectable()
export class SelectItemCartService extends UpdateOneService<ItemCart> {  
   
    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly update: SelectItemCartResource
    ) { super() }

    public run(id: number, itemCart: ItemCart): void {
        this.spinner.show();
        this.update.run(id, itemCart).subscribe({
            next: (response) => {
                this.complete.emit(response);
                this.spinner.hide();
            },
            error: (eventErr) => {
                this.toastr.error('Seu carrinho não foi atualizado', 'Há não :(', { progressBar: true });
                this.spinner.hide();
            }
        })
    }
}