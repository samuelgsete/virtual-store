import { Component, Input } from '@angular/core';
import { ImageModel } from 'src/app/models/image-model.entity';

import SwiperCore, { Pagination, Autoplay, EffectCoverflow } from 'swiper';

SwiperCore.use([ Pagination, Autoplay, EffectCoverflow ]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input()
  public brandLogo: string = '';
  @Input()
  public isFavorite: boolean = false;
  @Input() public images: ImageModel[] = [];
}