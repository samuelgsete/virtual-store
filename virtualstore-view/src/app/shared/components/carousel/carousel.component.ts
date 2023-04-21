import { Component, Input } from '@angular/core';
import { ImageModel } from 'src/app/models/image-model.entity';

import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';

SwiperCore.use([ Pagination, EffectCoverflow ]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input() protected brandLogo: string = '';

  @Input() protected isFavorite: boolean = false;
  
  @Input() public images: ImageModel[] = [];

}