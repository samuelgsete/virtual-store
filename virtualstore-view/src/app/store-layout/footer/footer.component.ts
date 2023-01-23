import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public currentYear: number = new Date().getFullYear();

  public store: any  = {
    fantasyName: 'LyMagazine',
    email: 'lymagazine@hotmail.com',
    phone: '+ 55 (85) 98971-1010'
  }

  public socialNetwork: any[] = [
    { path: '', urlImg: '/assets/img/icons/instagram-icon.png', name: 'Instagram' },
    { path: '', urlImg: '/assets/img/icons/facebook-icon.png', name: 'Facebook' },
    { path: '', urlImg: '/assets/img/icons/youtube-icon.png', name: 'YouTube' },
    { path: '', urlImg: '/assets/img/icons/whatsapp-icon.png', name: 'WhatsAppp' },
    { path: '', urlImg: '/assets/img/icons/telegram-icon.png', name: 'Telegram' },
  ]

  public paymentsMethods: any[] = [
    { urlImg: '/assets/img/icons/master.png', name: 'Mastercard' },
    { urlImg: '/assets/img/icons/hiper.png', name: 'Hipercard' },
    { urlImg: '/assets/img/icons/visa.png', name: 'Visa' },
    { urlImg: '/assets/img/icons/elo.png', name: 'Elo' },
    { urlImg: '/assets/img/icons/boleto.png', name: 'Boleto bancário' },
    { urlImg: '/assets/img/icons/pix.png', name: 'Pix' }
  ]
}