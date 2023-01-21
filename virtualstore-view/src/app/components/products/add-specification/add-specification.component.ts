import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Specification } from 'src/app/models/specification.entity';

@Component({
  selector: 'app-add-specification',
  templateUrl: './add-specification.component.html',
  styleUrls: ['./add-specification.component.css']
})
export class AddSpecificationComponent implements OnInit {

  protected form!: FormGroup;

  @Input()
  protected specifications: Specification[] = [];

  public constructor(private readonly _fb: FormBuilder) {}

  public getSpecifications(): Specification[] {
    return this.specifications;
  }

  protected selectedSpecifications(): Specification[] {
    return this.specifications.filter(specification => { return specification.isSelected })
  }

  protected select(selected: boolean, specification: Specification) {
    specification.isSelected = selected;
  }

  protected deleteSelecteds(specifications: Specification[]) {
    specifications.forEach(selectedSpecification => {
      const index = this.specifications.indexOf(selectedSpecification);
      this.specifications.splice(index, 1);
    });
  }

  protected addSpecifications(specification: any): void {
    const newSpecification = new Specification({
      id: null,
      name: specification.name,
      value: specification.value,
      isSelected: false,
      isDeleted: false,
    });
    this.specifications.push(newSpecification);
    this.form.reset();
  }

  public ngOnInit(): void {
    this.form = this._fb.group({
      name: ['', [Validators.minLength(1), Validators.maxLength(60)]],
      value: ['', [Validators.minLength(1), Validators.maxLength(60)]]
    })
  }
}