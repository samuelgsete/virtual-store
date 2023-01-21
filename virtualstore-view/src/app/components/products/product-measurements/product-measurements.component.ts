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

  public form!: FormGroup;

  public constructor(protected readonly _fb: FormBuilder) {}

  public getMeaurements(): ProductMeasurements {
    return new ProductMeasurements({
      id: this.form.value.id,
      weight: this.form.value.weight,
      width: this.form.value.width,
      height: this.form.value.height,
      diameter: this.form.value.diameter
    });
  }
  
  public ngOnInit(): void {
    this.form = this._fb.group({
      id: [this.productMeaurements.id],
      weight: [this.productMeaurements.weight, Validators.required],
      width: [this.productMeaurements.width, Validators.required],
      height: [this.productMeaurements.height, Validators.required],
      diameter: [this.productMeaurements.diameter, Validators.required]
    })
  }
}