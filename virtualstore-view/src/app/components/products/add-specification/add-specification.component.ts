import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Specification } from 'src/app/models/specification.entity';

@Component({
  selector: 'app-add-specification',
  templateUrl: './add-specification.component.html',
  styleUrls: ['./add-specification.component.css']
})
export class AddSpecificationComponent implements OnInit {

  public formSpecification!: FormGroup;

  @Input()
  public specifications: Specification[] = [];

  public constructor(private readonly _fb: FormBuilder) {}

  public selectedSpecifications(): Specification[] {
    return this.specifications.filter(specification => { return specification.isSelected })
  }

  public select(selected: boolean, specification: Specification) {
    specification.isSelected = selected;
  }

  public deleteSelecteds(specifications: Specification[]) {
    specifications.forEach(selectedSpecification => {
      const index = this.specifications.indexOf(selectedSpecification);
      this.specifications.splice(index, 1);
    });
  }

  public addSpecifications(specification: any): void {
    const newSpecification = new Specification({
      id: null,
      name: specification.name,
      value: specification.value,
      isSelected: false,
      isDeleted: false,
    });
    this.specifications.push(newSpecification);
    this.formSpecification.reset();
  }

  public ngOnInit(): void {
    this.formSpecification = this._fb.group({
      name: ['', [Validators.minLength(1), Validators.maxLength(60)]],
      value: ['', [Validators.minLength(1), Validators.maxLength(60)]]
    })
  }
}