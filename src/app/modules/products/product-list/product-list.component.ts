import { Component, OnInit } from '@angular/core';
import { Product, DummyProducts } from '../../../models/product.model';
import { SharedService } from '../../shared/shared.service';
import * as _ from 'lodash';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // public products: Product[];
  productsCollection$: AngularFirestoreCollection<Product>;
  productsObs$: Observable<Product[]>;
  constructor(
    public sharedService: SharedService,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    // this.products = _.shuffle(DummyProducts);
    this.productsCollection$ = this.db.collection('products');
    this.productsObs$ = this.productsCollection$.valueChanges();

  }

  addToBasket(product: Product) {
    this.sharedService.addToBasket(product);
  }

}
