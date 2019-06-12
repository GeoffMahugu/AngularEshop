import { Component, OnInit } from '@angular/core';
import { Product, DummyProducts } from '../../../models/product.model';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  constructor(public sharedService: SharedService) { }

  ngOnInit() {
    this.products = DummyProducts;
    console.log(this.products);
  }

  addToCart(product: Product) {
    this.sharedService.addToCart(product);
  }

}
