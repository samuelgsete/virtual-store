import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Product } from "src/app/models/product.entity";
import { FindByUniqueCodeResource } from "src/app/resources/products/findby-unique-code.resource";

@Injectable()
export class FindByUniqueCodeService {

    private readonly complete: EventEmitter<Product> = new EventEmitter<Product>();
    private progress: boolean = true;

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly findOne: FindByUniqueCodeResource
    ) {}

    public done(): EventEmitter<Product> { return this.complete }

    public inProgress(): boolean { return this.progress; }

    public run(code: string) {
        this.spinner.show();
        this.findOne.run(code).subscribe({
            next: (response) => {
                this.spinner.hide();
                this.progress = false;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.toastr.error('Não foi possível buscar o produto', 'Há não :(', { progressBar: true });
            }
        })
    }
}