import { Observable } from "rxjs";
import { HttpRequest } from "./http-request.resource";

export abstract class UpdateResource<T> extends HttpRequest {

    private controller: string = '';
    
    public constructor(_controller: string) {
        super()
        this.controller = _controller;
    }

    public getBaseUrl(): string {
        return this.localUrl.concat(this.controller);
    }

    public abstract run(id: number, createdResource: T): Observable<T>
}