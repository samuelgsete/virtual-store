import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Pagination } from "src/app/models/pagination.entity";
import { ListProductsPaginateResource } from "src/app/resources/products/list-products-paginate.resource";
import { ListPaginateService } from "../models/list-paginate.service";

@Injectable()
export class ListProductsPaginateService extends ListPaginateService {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listPaginate: ListProductsPaginateResource
    ) { super() }

    public run(pagination: Pagination) {
        this.spinner.show();
        this.listPaginate.run(pagination).subscribe({
            next: (response) => {
                this.spinner.hide();
                this.finally = true;
                this.emptyData = response.content.length == 0 ? true : false;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.finally = true;
                this.toastr.error('Não foi possível listar os produtos', 'Há não :(', { progressBar: true });
            }
        })
    }
}