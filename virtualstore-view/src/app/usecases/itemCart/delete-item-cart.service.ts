import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from "sweetalert2";

import { ItemCart } from "src/app/models/item-cart.entity";
import { DeleteOne } from "../models/delete-one.service";
import { DeleteItemCartResource } from "src/app/resources/itemCart/delete-item-cart.resource";

@Injectable()
export class DeleteItemCartService extends DeleteOne<ItemCart> {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly deleteOne: DeleteItemCartResource
    ) { super() }

    public run(id: number, itemCart: ItemCart): void {
        Swal.fire({
            title: 'Tem certeza que deseja remover?',
            text: 'Você não poderá desfazer essa operação',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if(result.isConfirmed) {
                this.spinner.show();
                this.deleteOne.run(id, itemCart).subscribe({
                    next: (response) => {
                        this.complete.emit(response);
                        this.spinner.hide();
                        this.toastr.success('Item removido com sucesso', 'Tudo certo :)', { progressBar: true });
                    },
                    error: (eventErr) => {
                        this.toastr.error('O Item não foi removido', 'Poxa vida :(', { progressBar: true });
                        this.spinner.hide();
                    }
                })
            }
        })
    }
}