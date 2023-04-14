import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

import { Color } from 'src/app/models/color.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ProductVersion } from 'src/app/models/product-version.entity';
import { Stock } from 'src/app/models/stock.entity';
import { ListColorsPaginateService } from 'src/app/usecases/colors/list-colors-paginate.service';
import { OptionNeedIsSelected } from 'src/app/validators/option-need-is-selected';

@Component({
  selector: 'app-add-product-versions',
  templateUrl: './add-product-versions.component.html',
  styleUrls: ['./add-product-versions.component.css']
})
export class AddProductVersionsComponent implements OnInit {

  protected form!: FormGroup;
  protected colors: Color[] = [];
  protected filteredColors!: Observable<Color[]>;
  protected productVersions: ProductVersion[] = []

  public constructor(
    protected readonly _fb: FormBuilder,
    private readonly listColors: ListColorsPaginateService
  ){}

  public getProductVersions(): ProductVersion[] { return this.productVersions; }

  private filterColors(search: any): Color[] {
    if(typeof search == 'string') {
      return this.colors.filter(color => color.name.toLowerCase().includes(search.toLowerCase()));
    }
    return this.colors;
  };

  protected displayFn(color: Color): string {
    return color?.name
  }

  protected addProductVersion(formValue: any): void {
    formValue.color.isAdded = true;
    this.productVersions.push(
      new ProductVersion({
        color: formValue.color,
        stock: new Stock({
          availableUnits: formValue.stock,
          updatedAt: new Date().toISOString()
        })
      })
    )
    this.form.clearValidators()
    this.form.reset()
  }

  public ngOnInit(): void {
    this.form = this._fb.group({
      color: ['', [Validators.required, new OptionNeedIsSelected().validate()]],
      stock: ['', Validators.required]
    })

    this.listColors.run(new Pagination({ size: 200 }));
    this.listColors.done().subscribe(response => {
      this.colors = response.content;
    });
    this.filteredColors = this.form['controls']['color'].valueChanges.pipe(
      startWith(''),
      map(value => this.filterColors(value || ''))
    )
  }
}