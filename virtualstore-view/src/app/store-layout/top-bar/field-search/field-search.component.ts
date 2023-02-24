import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-field-search',
  templateUrl: './field-search.component.html',
  styleUrls: ['./field-search.component.css']
})
export class FieldSearchComponent implements OnInit {

  protected search: FormControl = new FormControl('');

  public constructor(protected readonly router: Router) {}

  public ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(700)).subscribe(_search => {
      this.router.navigate(['catalog/search'], { queryParams: { search: _search, ordination: 'bestsellers' }})
    })
  }
}