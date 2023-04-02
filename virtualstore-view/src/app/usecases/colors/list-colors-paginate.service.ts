import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Pagination } from "src/app/models/pagination.entity";
import { ListColorsPaginateResource } from "src/app/resources/colors/list-colors-paginate.resource";
import { ListPaginateService } from "../models/list-paginate.service";

@Injectable()
export class ListColorsPaginateService extends ListPaginateService {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listPaginate: ListColorsPaginateResource
    ) { super() }

    public run(pagination: Pagination) {
        this.spinner.show();
        this.listPaginate.run(pagination).subscribe({
            next: (response) => {
                this.spinner.hide();
                this.emptyData = response.content.length == 0 ? true : false;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.toastr.error('Não foi possível listar as cores', 'Há não :(', { progressBar: true });
            }
        })
    }
}