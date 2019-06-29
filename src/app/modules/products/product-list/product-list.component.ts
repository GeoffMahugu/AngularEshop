import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { SharedService } from '../../shared/shared.service';
import * as _ from 'lodash';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsCollection$: AngularFirestoreCollection<Product>;
  productsObs$: Observable<Product[]>;
  constructor(
    public sharedService: SharedService,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.productsCollection$ = this.db.collection('products');
    this.productsObs$ = this.productsCollection$.valueChanges();
    this.productsObs$.subscribe(data => {
      console.log(data);
    });
  }

  addToBasket(product: Product) {
    this.sharedService.addToBasket(product);
  }

}
