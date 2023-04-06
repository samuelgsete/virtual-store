import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Department } from "src/app/models/department.entity";
import { Pagination } from "src/app/models/pagination.entity";
import { ListDepartmentsPaginateResource } from "src/app/resources/departments/list-departments-paginate.resource";

@Injectable()
export class ListDepartmentsPaginateService {

    private readonly complete: EventEmitter<Department[]> = new EventEmitter<Department[]>();

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listPaginate: ListDepartmentsPaginateResource
    ) {}

    public done(): EventEmitter<Department[]> { return this.complete }

    public run(pagination: Pagination) {
        this.spinner.show();
        this.listPaginate.run(pagination).subscribe({
            next: (response) => {
                this.spinner.hide();
                this.complete.emit(response.content);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.toastr.error('Não foi possível listar', 'Há não :(', { progressBar: true });
            }
        })
    }
}