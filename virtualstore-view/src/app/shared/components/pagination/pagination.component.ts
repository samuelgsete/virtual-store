import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

class Page {
  label: number = 0
  isCurrent: boolean = false
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  protected pages: Page[] = [];

  public constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  public changePage(nextPage: Page): void {
    this.router.navigate([], { 
      queryParams: { currentPage: nextPage.label },
      queryParamsHandling: 'merge'
    });
  }

  public loadPagination(): void {
    this.route.queryParams.subscribe(params => {
      this.pages = []
      let currentPage = params['currentPage'] || 0 ;
      let numberOfPages = params['numberOfPages'] || 0;
      for(let i = 0; i < numberOfPages; i++) {
        this.pages.push({
          label: i,
          isCurrent: currentPage == i ? true : false,
        })
      }
    })
  }

  public ngOnInit(): void { this.loadPagination() }
}