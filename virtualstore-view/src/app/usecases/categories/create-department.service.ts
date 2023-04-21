import { EventEmitter, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { CreateDepartmentResource } from "src/app/resources/departments/create-department.resource";
import { Department } from "src/app/models/department.entity";
import { Category } from "src/app/models/category.entity";

@Injectable()
export class CreateDepartmentService {

    private complete: EventEmitter<Department> = new EventEmitter<Department>();

    public constructor(
        private readonly toastr: ToastrService,
        private readonly spinner: NgxSpinnerService,
        private readonly create: CreateDepartmentResource
    ) {}

    public done(): EventEmitter<Department> { return this.complete; }

    public run(nameDepartment: string, _categories: Category[]): void {
        const department = new Department({
            id: null,
            name: nameDepartment,
            categories: _categories
        })
        console.log(department);
        this.spinner.show();
        this.create.run(department).subscribe({
            next: (response) => {
                this.toastr.success('O departamento foi criado com sucesso', 'Tudo ok! :)', { progressBar: true });
                this.complete.emit(response);
                this.spinner.hide();
            },
            error: (eventErr) => {
                this.toastr.error('Não foi possivél criar o departamento', 'Há não :(', { progressBar: true });
                this.spinner.hide();
            }
        })
    }
}