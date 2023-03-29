import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { ItemCart } from "src/app/models/item-cart.entity";
import { AddChildService } from "../models/add-child.service";
import { AddItemCartResource } from "src/app/resources/itemCart/add-item-cart.resource";

@Injectable()
export class AddItemCartService extends AddChildService<ItemCart> {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly add: AddItemCartResource
    ) { super() }
    
    public run(cartId: number, itemCart: ItemCart): void {
        this.spinner.show();
        this.add.run(cartId, itemCart).subscribe({
            next: (response) => {
                this.complete.emit(response);
                this.spinner.hide();
                this.toastr.success('Item adicionado com sucesso', 'Tudo certo :)', { progressBar: true });
            },
            error: (eventErr) => {
                this.toastr.error('Seu carrinho não foi atualizado', 'Há não :(', { progressBar: true });
                this.spinner.hide();
            }
        });
    }
}