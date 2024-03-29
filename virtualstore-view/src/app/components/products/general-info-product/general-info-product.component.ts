import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

import { Brand } from 'src/app/models/brand.entity';
import { Department } from 'src/app/models/department.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListBrandsPaginateService } from 'src/app/usecases/brands/list-brands-paginate.service';
import { ListDepartmentsPaginateService } from 'src/app/usecases/departments/list-departments-paginate.service';
import { ConditionsOfProductService } from 'src/app/usecases/products/conditions-of-product.service';
import { OptionNeedIsSelected } from 'src/app/validators/option-need-is-selected';

@Component({
  selector: 'app-general-info-product',
  templateUrl: './general-info-product.component.html',
  styleUrls: ['./general-info-product.component.css']
})
export class GeneralInfoProductComponent implements OnInit {

  public form!: FormGroup;
  protected departments: Department[] = [];
  protected brands: Brand[] = [];
  protected filteredBrands!: Observable<Brand[]>;

  public constructor(
    protected readonly _fb: FormBuilder,
    protected readonly conditions: ConditionsOfProductService,
    protected readonly listDepartments: ListDepartmentsPaginateService,
    protected readonly listBrands: ListBrandsPaginateService
  ) {}

  protected categoryComparator(category1: any, category2: any): boolean {
    if(category1.nome == category2.nome)
      return true;
    return false
  }

  private filterBrands(search: any): Brand[] {
    if(typeof search == 'string') {
      const filterValue = search.toLowerCase();
      return this.brands.filter(brand => brand.name.toLowerCase().includes(filterValue));
    }
    return this.brands;
  }

  protected displayFn(brand: Brand): string { return brand.name }

  public ngOnInit(): void {
    this.form = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
      brand: ['', [Validators.required, new OptionNeedIsSelected().validate()]],
      model: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(64)]],
      line: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(64)]],
      warranty: [''],
      details: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20000)]],
      ean:['', Validators.required],
      freeDelivery: [true, Validators.required],
      justReleased:[false, Validators.required],
      productCondition: ['', Validators.required],
      contentPackaging: ['', [Validators.required, Validators.maxLength(255)]],
      category: ['', Validators.required]
    })

    this.listDepartments.run(new Pagination({ size: 200 }));
    this.listDepartments.done().subscribe(departments => {
      this.departments = departments;
    })

    this.listBrands.run(new Pagination({ size: 200 }))
    this.listBrands.done().subscribe(response => {
      this.brands = response.content;
    })

    this.filteredBrands = this.form['controls']['brand'].valueChanges.pipe(
      startWith(''),
      map(value => this.filterBrands(value || ''))
    )
  }
}