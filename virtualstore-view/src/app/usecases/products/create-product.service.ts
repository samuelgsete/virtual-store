import { EventEmitter, Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

import { Product } from "src/app/models/product.entity";
import { CreateProductResource } from "src/app/resources/products/create-product.resource";

@Injectable()
export class CreateProductService {

    private complete: EventEmitter<any> = new EventEmitter<any>();
   

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly create: CreateProductResource
    ) {}

    public done(): EventEmitter<any> { return this.complete }
    
    public run(
        _generalInfo: any, 
        _measurements: any, 
        _productVersions: any, 
        _specifications: any,
        _pricing: any,
        _images: any,
    ): void {
        
        const product = new Product({
            id:null,
            name: _generalInfo.value.name,
            model: _generalInfo.value.model,
            line: _generalInfo.value.line,
            warranty: _generalInfo.value.warranty,
            soldUnits: 0,
            freeDelivery: _generalInfo.value.freeDelivery,
            justReleased: _generalInfo.value.justReleased,
            ratingAverage: 2,
            numberOfRaters: 6,
            productCondition: _generalInfo.value.productCondition,
            contentPackaging: _generalInfo.value.contentPackaging,
            isActive: true,
            category: _generalInfo.value.category,
            eanCode: _generalInfo.value.ean,
            details: _generalInfo.value.details,
            brand: _generalInfo.value.brand,
            pricing: _pricing,
            images: _images,
            productVersions: _productVersions,
            specifications: _specifications,
            measurements: _measurements
        });
        console.log(product);
        this.spinner.show();
        this.create.run(product).subscribe({
            next: (response) => {
                this.toastr.success('Anúncio criado com sucesso', 'Tudo ok! :)', { progressBar: true });
                this.complete.emit(response);
                this.spinner.hide();
            },
            error: (eventErr) => {
                console.log(eventErr);
                this.toastr.error('Não foi possivél criar', 'Há não :(', { progressBar: true });
                this.spinner.hide();
            }
        })
    }
}