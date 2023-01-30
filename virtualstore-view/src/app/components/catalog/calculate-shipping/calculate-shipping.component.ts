import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculate-shipping',
  templateUrl: './calculate-shipping.component.html',
  styleUrls: ['./calculate-shipping.component.css']
})
export class CalculateShippingComponent {

  protected cep: FormControl = new FormControl('', {
    validators: Validators.required
  })
}