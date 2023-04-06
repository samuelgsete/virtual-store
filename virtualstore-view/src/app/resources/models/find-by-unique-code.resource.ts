import { Observable } from "rxjs";
import { HttpRequest } from "./http-request.resource";

export abstract class FindByUniqueCodeResource<T> extends HttpRequest {

    private controller: string = '';

    public constructor(_controller: string) {
        super();
        this.controller = _controller;
    }

    protected getBaseUrl(): string {
        return this.localUrl.concat(this.controller);
    }

    public abstract run(code: string): Observable<T>;
}