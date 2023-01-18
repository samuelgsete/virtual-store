import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { debounceTime } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

import { Pricing } from "src/app/models/pricing.entity";
import { GeneratePricingResource } from "src/app/resources/pricing/generate-pricing.resource";

const PERCENTANGE = 100;

@Injectable()
export class GeneratePricingService {

    private complete: EventEmitter<Pricing> = new EventEmitter<Pricing>();
   
    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly generatePricing: GeneratePricingResource
    ) {}

    public done(): EventEmitter<Pricing> { return this.complete }

    public run(formValue: any): void {
        this.spinner.show();
        this.generatePricing.run(
            formValue.basePrice, 
            formValue.rateIncashDiscount / PERCENTANGE, 
            formValue.rateInstallmentDiscount / PERCENTANGE, 
            formValue.maxInstallment
        )
        .pipe(debounceTime(1500))
        .subscribe({
            next: (response) => {
                this.spinner.hide();
                this.complete.emit(response);
            },
            error: (eventErr) => {
                this.spinner.hide();
                this.toastr.error('Não foi concluir a operação', 'Há não :(', { progressBar: true });
            }
        })
    }
}