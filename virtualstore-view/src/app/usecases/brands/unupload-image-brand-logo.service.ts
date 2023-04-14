import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { UnuploadedImageService } from "../models/unuploaded-image.service";
import { UnuploadImageBrandLogoResource } from "src/app/resources/brands/unupload-image-brand-logo.resource";

@Injectable()
export class UnuploadImageBrandLogoService extends UnuploadedImageService {

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly unUploadImage: UnuploadImageBrandLogoResource
    ) { super() }

    public override run(nameFile: string): void {
        this.spinner.show();
        this.unUploadImage.run(nameFile).subscribe({
            next: (response) => {
                this.spinner.hide();
                this.toastr.success('A imagem foi deletada', 'Tudo ok! :)', { progressBar: true });
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.toastr.error('Não foi possivél remover', 'Há não :(', { progressBar: true });
            }
        });
    }
}