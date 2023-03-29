import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { ShoppingCart } from "src/app/models/shopping-cart.entity";
import { FindOneShoppingCartResource } from "src/app/resources/shoppingCarts/find-one-shopping-cart.resource";
import { findOneService } from "../models/find-one.serice";

@Injectable()
export class FindOneShoppingCartService extends findOneService<ShoppingCart> {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly findOne: FindOneShoppingCartResource
    ) {  super() }

    public run(id: number): void {
        this.spinner.show();
        this.findOne.run(id).subscribe({
            next: (response) => {
                this.spinner.hide();
                this.progress = false;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.toastr.error('Não foi possível buscar o carrinho', 'Há não :(', { progressBar: true });
            }
        })
    }
}