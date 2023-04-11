import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-field-search',
  templateUrl: './field-search.component.html',
  styleUrls: ['./field-search.component.css']
})
export class FieldSearchComponent implements OnInit {

  protected formSearch: FormControl = new FormControl('');
  protected ordination: string = 'bestsellers';
  protected search!: string;

  public constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.formSearch.valueChanges.pipe(debounceTime(700)).subscribe(_search => {
      this.router.navigate(['catalog/search'], { queryParams: { search: _search, ordination: this.ordination }})
    })
  }
}