import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

import * as _ from 'lodash';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsCollection$: AngularFirestoreCollection<Product>;
  productsObs$: Observable<Product[]>;
  constructor(
    private db: AngularFirestore,
  ) { }

  getTopProducts() {
    this.productsCollection$ = this.db.collection('products', ref => {
      return ref.where('price', '>', 2000)
        .limit(6);
      // return ref.orderBy('name')
      //   .limit(6);
    });
    this.productsObs$ = this.productsCollection$.valueChanges();
  }
  getCategoryProducts(category: string) {
    this.productsCollection$ = this.db.collection('products', ref => {
      return ref.where('category', '==', category);
    });
    this.productsObs$ = this.productsCollection$.valueChanges();
  }
}
