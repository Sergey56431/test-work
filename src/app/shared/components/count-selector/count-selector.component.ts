import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartServiceService} from "../../services/cart-service.service";

@Component({
  selector: 'count-selector',
  templateUrl: './count-selector.component.html',
  styleUrls: ['./count-selector.component.scss']
})
export class CountSelectorComponent implements OnInit {

  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  countName: string = ' Штук'

  constructor(private cartService: CartServiceService) {
  }

  ngOnInit(): void {

  }

  counterChange() {
    this.countChange.emit(this.count);
  }

  decreaseCount() {
    if (this.count >= 1) {
      this.count--;
      this.counterChange();
    }
    if (this.count < 1) {
      this.count = 0;
      this.cartService.removeFromCart(this.count + '')
    }
  }

  increaseCount() {
    this.count++;
    this.counterChange();
  }


}
