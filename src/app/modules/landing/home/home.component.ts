import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

export interface CarouselItem {
  img: string;
  name: string;
  slug: string;
}

@Component({
  selector: 'app-landing-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carousel$: CarouselItem[];
  constructor() { }

  ngOnInit() {
    this.carousel$ = [
      {
        img: '../../../../assets/background/fashion.svg',
        name: 'Fashion',
        slug: 'fashion'
      },
      {
        img: '../../../../assets/background/electronics.svg',
        name: 'Electronics',
        slug: 'electronics'
      },
      {
        img: '../../../../assets/background/phones_tablets.svg',
        name: 'Phones & Tablets',
        slug: 'phones-tablets'
      },
      {
        img: '../../../../assets/background/compouters.svg',
        name: 'Computers',
        slug: 'computers'
      }
    ]
  }

}
