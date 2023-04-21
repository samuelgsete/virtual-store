import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Pagination } from "src/app/models/pagination.entity";
import { ListDepartmentsPaginateResource } from "src/app/resources/departments/list-departments-paginate.resource";
import { ListPaginateService } from "../models/list-paginate.service";

@Injectable()
export class ListDepartmentsPaginateService extends ListPaginateService {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listPaginate: ListDepartmentsPaginateResource
    ) { super() }

    public run(pagination: Pagination) {
        this.spinner.show();
        this.listPaginate.run(pagination).subscribe({
            next: (response) => {
                this.spinner.hide();
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.toastr.error('Não foi possível listar os departamentos', 'Há não :(', { progressBar: true });
            }
        })
    }
}