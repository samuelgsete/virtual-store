import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { debounceTime } from "rxjs";

import { Color } from "src/app/models/color.entity";
import { Pagination } from "src/app/models/pagination.entity";
import { ListColorsPaginateResource } from "src/app/resources/colors/list-colors-paginate.resource";

@Injectable()
export class ListColorsPaginateService {

    private readonly complete: EventEmitter<Color[]> = new EventEmitter<Color[]>();

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly listPaginate: ListColorsPaginateResource
    ) {}

    public done(): EventEmitter<Color[]> { return this.complete }

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
                this.toastr.error('Não foi possível listar as cores', 'Há não :(', { progressBar: true });
            }
        })
    }
}