import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from '../../../models/product.model';
import { Countries } from '../../../models/countries.model';
import { CartModel } from '../../../models/cart.model';
import { SharedService } from '../../shared/shared.service';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cart: CartModel;
  public basketCount: number;
  private subs = new SubSink();
  public shippingFormGroup: FormGroup;
  public countries: any[];
  constructor(private sharedService: SharedService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cart = this.sharedService.getLocalCart();
    if (this.cart) {
      this.basketCount = this.cart.basket.length;
    }
    this.updateCart();
    this.countries = Countries;
    this.shippingFormGroup = this.formBuilder.group({
      address_1: ['', Validators.required],
      address_2: [''],
      country: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      phone_number: ['', Validators.required],
      details: ['', Validators.required],
    });
  }
  updateCart() {
    this.subs.add(
      this.sharedService.cartObservable.subscribe(data => {
        this.cart = data;
        this.basketCount = this.cart.basket.length;

      })
    );
  }
  checkout() {
    this.sharedService.checkout();
  }
}
