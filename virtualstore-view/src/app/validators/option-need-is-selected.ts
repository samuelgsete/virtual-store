import { FormControl } from '@angular/forms';

export class OptionNeedIsSelected {

    public validate(): any {
        return (control: FormControl) => {
            if(typeof control.value == 'string') {
                return { unSelected: true };
            }
            return null;
        };
    }
}