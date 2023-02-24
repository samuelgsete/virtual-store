import { Component } from '@angular/core';
import SwiperCore, { Pagination, Autoplay, EffectFade, EffectCoverflow, EffectFlip, Navigation } from 'swiper';

SwiperCore.use([ Navigation, Pagination, EffectFade, EffectCoverflow, EffectFlip ]);

@Component({
  selector: 'app-store-banner',
  templateUrl: './store-banner.component.html',
  styleUrls: ['./store-banner.component.css']
})
export class StoreBannerComponent {

  public promotions: any[] = [
    { name: 'Notebook Samsung', urlImg: '/assets/img/banner/banner-destaque-4.png', path: '' },
    { name: 'Console PlayStation 4 Slim', urlImg: '/assets/img/banner/banner-destaque-5.png', path: '' },
    { name: 'Placas de Video', urlImg: '/assets/img/banner/banner-destaque-1.png', path: '' },
    { name: 'Perifericos', urlImg: '/assets/img/banner/banner-destaque-2.png', path: '' },
    { name: 'Console Xbox One X', urlImg: '/assets/img/banner/banner-destaque-3.png', path: '' },
  ];
}