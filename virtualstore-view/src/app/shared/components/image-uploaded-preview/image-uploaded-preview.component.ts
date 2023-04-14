import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-uploaded-preview',
  templateUrl: './image-uploaded-preview.component.html',
  styleUrls: ['./image-uploaded-preview.component.css']
})
export class ImageUploadedPreviewComponent implements OnInit {

  protected url: string = '';
  protected name: string = '';
  protected isUploaded: boolean = false;

  public ngOnInit(): void {}
}