import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { ItemCart } from "src/app/models/item-cart.entity";
import { UpdatedQuantityItemCartResource } from "src/app/resources/itemCart/updated-quantity-item-cart.resource";
import { UpdateOneService } from "../models/update-one.service";

@Injectable()
export class UpdateQuantityItemCartService extends UpdateOneService<ItemCart> {  
   
    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly update: UpdatedQuantityItemCartResource
    ) { super() }

    public run(id: number, itemCart: ItemCart): void {
        this.spinner.show();
        this.update.run(id, itemCart).subscribe({
            next: (response) => {
                this.complete.emit(response);
                this.finally = true;
                this.spinner.hide();
            },
            error: (eventErr) => {
                this.toastr.error('Seu carrinho não foi atualizado', 'Há não :(', { progressBar: true });
                this.spinner.hide();
                this.finally = true;
            }
        })
    }
}