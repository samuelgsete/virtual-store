import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { Color } from "src/app/models/color.entity";
import { CreateService } from "../models/create.service";
import { CreateColorResource } from "src/app/resources/colors/create-color.resource";

@Injectable()
export class CreateColorService extends CreateService {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly create: CreateColorResource
    ) { super() }

    public run(data: any): void {
        const color = new Color({
            id: data.id,
            name: data.name,
            hexCode: data.hexCode
        });
        this.spinner.show();
        this.create.run(color).subscribe({
            next: (response) => {
                this.toastr.success('Cor criada com sucesso', 'Tudo ok! :)', { progressBar: true });
                this.complete.emit(response);
                this.spinner.hide();
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possivél criar a cor', 'Há não :(', { progressBar: true });
                this.spinner.hide();
            }
        })
    }
}