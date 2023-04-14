import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { CreateBrandResource } from "src/app/resources/brands/create-brand.resource";
import { CreateService } from "../models/create.service";
import { Brand } from "src/app/models/brand.entity";

@Injectable()
export class CreateBrandService extends CreateService {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly create: CreateBrandResource
    ) { super() }

    public run(data: any): void {
        const brand = new Brand({
            id: null,
            name: data.name,
            website: data.website,
            urlLogo: data.urlLogo
        })
        this.spinner.show();
        this.create.run(brand).subscribe({
            next: (response) => {
                this.toastr.success('A Marca foi criada com sucesso', 'Tudo ok! :)', { progressBar: true });
                this.complete.emit(response);
                this.spinner.hide();
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possivél criar a marca', 'Há não :(', { progressBar: true });
                this.spinner.hide();
            }
        })
    }
}