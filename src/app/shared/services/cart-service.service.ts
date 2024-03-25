import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public count: string | null = '0';
  count$: Subject<string> = new Subject<string>();

  constructor() { }

  getCart():string | null {
    return this.count = localStorage.getItem('count');
  }

  addToCart(count: string){
    localStorage.setItem('count', count);
  }

  addToFavorite(favorite: string) {
    localStorage.setItem('favorite', favorite);
  }

  removeFromCart(count: string) {
    localStorage.setItem('count', '0');
    this.count$.next('0');
    this.count = '0';
    this.getCart();

  }
}
