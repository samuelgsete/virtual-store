import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

import { DeleteImageResource } from "src/app/resources/uploads-images/delete-image.resource";
import { ImageModel } from "src/app/models/image-model.entity";

@Injectable()
export class DeleteImageService {
    
    private delete: EventEmitter<any> = new EventEmitter<any>();

    public constructor(
        private readonly toastr: ToastrService,
        private readonly deleteImage: DeleteImageResource
    ) {}

    public done(): EventEmitter<any> { return this.delete }

    public run(image: ImageModel, index: number): void {
        Swal.fire({
            title: 'Tem certeza que deseja remover?',
            text: 'Você não poderá desfazer essa operação',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SIM',
            cancelButtonText: 'NÃO'
        }).then((result) => {
            if(result.isConfirmed) {
                image.isDeleted = true;
                this.deleteImage.run(image.randomName).subscribe({
                    next: (response) => {
                        this.toastr.success('A imagem foi deletada', 'Tudo ok! :)', { progressBar: true });
                        this.delete.emit(index);
                    },
                    error: (eventErr) => {
                        this.toastr.error('Não foi possivél remover', 'Há não :(', { progressBar: true });
                    }
                });
            }
        })
    }
}