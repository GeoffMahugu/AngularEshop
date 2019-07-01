import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { ProductsService } from '../../../modules/products/products.service';
import { CategoryModel, DefaultCategory } from '../../../models/category.model';
@Component({
  selector: 'app-landing-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carousel$: CategoryModel[] = DefaultCategory;
  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getTopProducts();
  }
}
