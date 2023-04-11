import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CreateColorService } from 'src/app/usecases/colors/create-color.service';
import { SetHexCodeService } from 'src/app/usecases/colors/set-hex-code.service';

@Component({
  selector: 'app-create-color',
  templateUrl: './create-color.component.html',
  styleUrls: ['./create-color.component.css']
})
export class CreateColorComponent implements OnInit {

  public formColor!: FormGroup;

  public constructor(
    protected readonly _fb: FormBuilder,
    protected router: Router,
    protected readonly setHexCode: SetHexCodeService,
    protected readonly createColor: CreateColorService
  ) {}

  public ngOnInit(): void {
    this.formColor = this._fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(64)]],
      hexCode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]]
    })
    this.createColor.done().subscribe(response => {
      this.router.navigateByUrl('colors');
    })
  }
}