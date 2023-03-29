import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FindOneShoppingCartService } from 'src/app/usecases/shoppingCarts/find-one-shopping-cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public routes: any[] = [
    { name: 'Loja', path: '/home', icon: 'store', badge: null },
    { name: 'Favoritos', path: '/favorites', icon: 'favorite', badge: 5 },
    { name: 'Carrinho', path: '/shopping-cart', icon: 'shopping_cart', badge: 3 }
  ]
  
  public constructor(
    protected readonly router: Router,
    protected readonly findCart: FindOneShoppingCartService
  ) {}

  public ngOnInit(): void {}
}