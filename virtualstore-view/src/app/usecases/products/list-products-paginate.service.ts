import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Pagination } from "src/app/models/pagination.entity";
import { ListProductsPaginateResource } from "src/app/resources/products/list-products-paginate.resource";

@Injectable()
export class ListProductsPaginateService {

    private readonly complete: EventEmitter<any> = new EventEmitter<any>();

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listPaginate: ListProductsPaginateResource
    ) {}

    public done(): EventEmitter<any> { return this.complete }

    public run(pagination: Pagination) {
        this.spinner.show();
        this.listPaginate.run(pagination).subscribe({
            next: (response) => {
                this.spinner.hide();
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.toastr.error('Não foi possível listar', 'Há não :(', { progressBar: true });
            }
        })
    }
}