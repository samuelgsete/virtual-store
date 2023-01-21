import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ProductVersion } from 'src/app/models/product-version.entity';

@Component({
  selector: 'app-list-product-versions',
  templateUrl: './list-product-versions.component.html',
  styleUrls: ['./list-product-versions.component.css']
})
export class ListProductVersionsComponent implements OnInit {

  @Input() public productVersions: ProductVersion[] = [];
  
  public deleteVersion(index: number): void {
    this.productVersions[index].color.isAdded = false;
    this.productVersions.splice(index, 1);
  }

  public ngOnInit(): void {}
}