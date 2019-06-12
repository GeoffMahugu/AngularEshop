import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { SharedService } from '../../shared/shared.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  // addToCart(product: Product) {
  //   this.sharedService.addToCart(product);
  // }

}
