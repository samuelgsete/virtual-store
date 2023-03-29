import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-preview',
  templateUrl: './color-preview.component.html',
  styleUrls: ['./color-preview.component.css']
})
export class ColorPreviewComponent {

  @Input() public hexCode: string = '';
  
  @Input() public name: string = '';

}