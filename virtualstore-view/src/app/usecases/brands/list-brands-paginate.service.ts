import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Brand } from "src/app/models/brand.entity";
import { Pagination } from "src/app/models/pagination.entity";
import { ListBrandsPaginateResource } from "src/app/resources/brands/list-brands-paginate.resource";
import { ListPaginateService } from "../models/list-paginate.service";

@Injectable()
export class ListBrandsPaginateService extends ListPaginateService {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listPaginate: ListBrandsPaginateResource
    ) { super() }

    public run(pagination: Pagination) {
        this.spinner.show();
        this.listPaginate.run(pagination).subscribe({
            next: (response) => {
                this.finally = true;
                this.spinner.hide();
                this.emptyData = response.content.length == 0 ? true : false;
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.finally = true;
                this.toastr.error('Não foi possível listar as marcas', 'Há não :(', { progressBar: true });
            }
        })
    }
}