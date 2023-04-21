import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { CreateResource } from "../models/create.resource";
import { Department } from "src/app/models/department.entity";

@Injectable()
export class CreateDepartmentResource extends CreateResource<Department> {

    public constructor(private readonly http: HttpClient) {
        super('departments')
    }

    public override run(department: Department): Observable<any> {
        return this.http.post<any>(this.getBaseUrl(), department);
    }
}