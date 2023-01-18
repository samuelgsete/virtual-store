import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductMeasurements } from 'src/app/models/product-measurements.entity';

@Component({
  selector: 'app-product-measurements',
  templateUrl: './product-measurements.component.html',
  styleUrls: ['./product-measurements.component.css']
})
export class ProductMeasurementsComponent implements OnInit {

  @Input()
  public productMeaurements: ProductMeasurements = new ProductMeasurements();

  public formMeasurements!: FormGroup;

  public constructor(protected readonly _fb: FormBuilder) {}
  
  public ngOnInit(): void {
    this.formMeasurements = this._fb.group({
      weight: [this.productMeaurements.weight, Validators.required],
      width: [this.productMeaurements.width, Validators.required],
      height: [this.productMeaurements.height, Validators.required],
      diameter: [this.productMeaurements.diameter, Validators.required]
    })
  }
}