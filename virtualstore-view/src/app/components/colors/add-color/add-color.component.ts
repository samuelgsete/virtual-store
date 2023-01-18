import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Color } from 'src/app/models/color.entity';
import { Pagination } from 'src/app/models/pagination.entity';
import { ListColorsPaginateService } from 'src/app/usecases/colors/list-colors-paginate.service';
import { OptionNeedIsSelected } from 'src/app/validators/option-need-is-selected';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {
  
  public colors: Color[] = [];
  public filteredColors!: Observable<Color[]>;
  @Input() public addedColors: Color[] = [];
  
  public formColor: FormControl = new FormControl('', {
    validators: [
      Validators.required,
      new OptionNeedIsSelected().validate()
    ]
  })

  public constructor(private readonly listColors: ListColorsPaginateService) {}

  public addColor(color: Color): void { 
    color.isAdded = true;
    this.addedColors.push(color);
  }

  public displayFn(color: Color) {
    return color.name;
  }

  public deleteColor(index: number): void {
    this.addedColors[index].isAdded = false;
    this.addedColors.splice(index, 1);
  }

  private filterColors(search: any): Color[] {
    if(typeof search == 'string') {
      const filterValue = search.toLowerCase();
      return this.colors.filter(color => color.name.toLowerCase().includes(filterValue));
    }
    return this.colors;
  }
  
  public ngOnInit(): void {
    this.listColors.run(new Pagination());
    this.listColors.done().subscribe(colors => {
      this.colors = colors;
    });
    this.filteredColors = this.formColor.valueChanges.pipe(
      startWith(''),
      map(value => this.filterColors(value || ''))
    )
  }
}