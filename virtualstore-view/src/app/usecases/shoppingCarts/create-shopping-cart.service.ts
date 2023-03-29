import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { ItemCart } from "src/app/models/item-cart.entity";
import { ProductVersion } from "src/app/models/product-version.entity";
import { Product } from "src/app/models/product.entity";
import { ResumeCart } from "src/app/models/resume-cart.entity";
import { ShoppingCart } from "src/app/models/shopping-cart.entity";
import { CreateShoppingCartResource } from "src/app/resources/shoppingCarts/create-shopping-cart.resource";

@Injectable()
export class CreateShoppingCartService {

    private complete: EventEmitter<any> = new EventEmitter<any>();

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly create: CreateShoppingCartResource
    ) {}

    public done(): EventEmitter<any> { return this.complete }

    public run(product: Product, productVersion: ProductVersion, quantity: number): void {
        this.spinner.show();
        const newShoppingCart = new ShoppingCart({
            id: null,
            resumeCart: new ResumeCart({
                subtotalIncash: 0.0,
                subtotalInstallment: 0.0,
                incashDiscount: 0.0,
                maxInstallment: 0
            }),
            items: [
                new ItemCart({
                    quantity: quantity,
                    product: product,
                    productVersion: productVersion,
                    subtotalIncash: 0,
                    subtotalInstallment: 0,
                    isSelected: true
                })
            ]
        })
        this.create.run(newShoppingCart).subscribe({
            next: (response) => {
                this.toastr.success('Carrinho criado com sucesso', 'Tudo ok! :)', { progressBar: true });
                console.log(response);
                this.complete.emit(response);
                this.spinner.hide();
            },
            error: (eventErr) => {
                console.log(eventErr);
                this.toastr.error('Não foi possivél criar', 'Há não :(', { progressBar: true });
                this.spinner.hide();
            }
        })
    }
}