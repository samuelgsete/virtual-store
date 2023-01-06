import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

import { ImageModel } from "src/app/models/image-model.entity";
import { DeleteManyImagesResource } from "src/app/resources/uploads-images/delete-many-images.resource";

@Injectable()
export class DeleteManyImagesService {

    private delete: EventEmitter<any> = new EventEmitter<any>();

    public constructor(
        private readonly toastr: ToastrService,
        private readonly deleteMany: DeleteManyImagesResource
    ) {}

    public done(): EventEmitter<any> { return this.delete }

    public run(deletedImages: ImageModel[]): void {
        Swal.fire({
            title: 'Tem certeza que deseja remover?',
            text: 'Todas as imagens serão removidas',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SIM',
            cancelButtonText: 'NÃO'
        }).then((result) => {
            if(result.isConfirmed) {
                deletedImages.map(image => { 
                    image.isDeleted = true;
                    return image; 
                })
                this.deleteMany.run(deletedImages).subscribe({
                    next: (response) => {
                        this.toastr.success('As imagens foram removidas', 'Tudo ok! :)', { progressBar: true });
                        this.delete.emit(deletedImages);
                    },
                    error: (eventErr) => {
                        this.toastr.error('Não foi possivél remover', 'Há não :(', { progressBar: true });
                    }
                });
            }
        })
    }
}