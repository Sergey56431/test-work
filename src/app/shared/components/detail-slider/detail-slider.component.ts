import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail-slider',
  templateUrl: './detail-slider.component.html',
  styleUrls: ['./detail-slider.component.scss']
})
export class DetailSliderComponent implements OnInit {

  slider: string[] = [
      './assets/images/products/product_1.png',
      './assets/images/products/product_2.png',
      './assets/images/products/product_3.png',
      './assets/images/products/product-4.png'
    ]


  constructor() { }

  ngOnInit(): void {
  }


  nextSlide() {
    console.log(this.slider)
  }

  pervSlide() {

  }
}
