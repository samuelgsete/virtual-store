import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { debounceTime } from "rxjs";

import { Brand } from "src/app/models/brand.entity";
import { Pagination } from "src/app/models/pagination.entity";
import { ListBrandsPaginateResource } from "src/app/resources/brands/list-brands-paginate.resource";

@Injectable()
export class ListBrandsPaginateService {

    private readonly complete: EventEmitter<Brand[]> = new EventEmitter<Brand[]>();

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listPaginate: ListBrandsPaginateResource
    ) {}

    public done(): EventEmitter<Brand[]> { return this.complete }

    public run(pagination: Pagination) {
        this.spinner.show();
        this.listPaginate.run(pagination)
        .pipe(debounceTime(5000))
        .subscribe({
            next: (response) => {
                this.spinner.hide();
                this.complete.emit(response.content);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.toastr.error('Não foi possível listar as marcas', 'Há não :(', { progressBar: true });
            }
        })
    }
}