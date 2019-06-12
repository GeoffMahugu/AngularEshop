import { Component, OnInit } from '@angular/core';
import { Product, DummyProducts } from '../../../models/product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  constructor() { }

  ngOnInit() {
    this.products = DummyProducts;
    console.log(this.products);
  }

}
