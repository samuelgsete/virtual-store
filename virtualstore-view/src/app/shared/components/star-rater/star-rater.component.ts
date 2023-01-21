import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rater',
  templateUrl: './star-rater.component.html',
  styleUrls: ['./star-rater.component.css']
})
export class StarRaterComponent implements OnInit {

  @Input() public ratingAverage: number = 1;
  @Input() public numberOfRaters: number = 1;

  public constructor() {}

  ngOnInit(): void {}
}