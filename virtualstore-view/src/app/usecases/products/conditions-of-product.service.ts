import { Injectable } from "@angular/core";

@Injectable()
export class ConditionsOfProductService {

    public run(): string[] {
        return ['Novo', 'Seminovo', 'Usado', 'Reembalado']
    }
}