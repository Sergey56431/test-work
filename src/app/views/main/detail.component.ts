import { Component, OnInit } from '@angular/core';
import {CartServiceService} from "../../shared/services/cart-service.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public inFavorite: boolean = false;
  count: number = 0;
  countInCart: string = '';

  constructor(private cartService: CartServiceService) {
  }

  ngOnInit(): void {
    let cartCount = this.cartService.getCart();
    const prodCount = parseInt(cartCount!)
    this.inFavorite = JSON.parse(localStorage.getItem('favorite')!)
    if (cartCount) {
      this.count = prodCount;

    }

    this.cartService.count$.subscribe(() => {
      if (!cartCount || cartCount === '0') {
        this.cartService.addToCart('0')
        this.count = 0
      }
    })
  }

  addInFavorite() {
    this.inFavorite = !this.inFavorite
    this.cartService.addToFavorite(JSON.stringify(this.inFavorite));
  }

  adToCart() {
    this.count = 1;
    this.countInCart = this.count + '';
    this.cartService.addToCart(this.countInCart);
  }

  updateCount(value: number) {
    this.countInCart = value + '';
    this.cartService.addToCart(this.countInCart);
  }


}
