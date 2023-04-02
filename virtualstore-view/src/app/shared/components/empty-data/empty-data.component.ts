import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-data',
  templateUrl: './empty-data.component.html',
  styleUrls: ['./empty-data.component.css']
})
export class EmptyDataComponent {

  public urlImg: string = '/assets/img/svg/undraw_empty_re_opql.svg';

  @Input()
  public search: string = '';
  @Input()
  public message: string = '';
  @Input()
  public title: string = '';
}