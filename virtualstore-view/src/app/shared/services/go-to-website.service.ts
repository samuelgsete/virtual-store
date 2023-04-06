import { Injectable } from "@angular/core";

@Injectable()
export class GoToWebsiteService {

    public run(url: string): void { 
        window.open(`https://${url}`);
    }
}