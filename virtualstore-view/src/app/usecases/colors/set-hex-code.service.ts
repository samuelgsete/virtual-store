import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable()
export class SetHexCodeService {
    public run(hexCode: string, formControlHexCode: AbstractControl): void {
        formControlHexCode.patchValue(hexCode.toUpperCase());
    }
}