import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Product, Categories } from '../../../models/product.model';
import { SharedService } from '../../shared/shared.service';
import { MatSnackBar } from '@angular/material';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
@Component({
  selector: 'app-admin-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productFormGroup: FormGroup;
  public categories: any;

  productsCollection$: AngularFirestoreCollection<Product>;
  productsObs$: Observable<Product[]>;

  constructor(
    public auth: AuthService,
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private db: AngularFirestore,
    private snackbar: MatSnackBar

  ) { }

  ngOnInit() {
    this.categories = Categories;
    this.productsCollection$ = this.db.collection('products');
    this.productsObs$ = this.productsCollection$.valueChanges();
    this.productFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      currency: ['KSH', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.compose([Validators.pattern(urlRegex), Validators.required])],
      category: ['', Validators.required],
      active: [true, Validators.required],
    });
  }

  submitProduct() {
    this.productFormGroup.value['slug'] = this.sharedService.slugifyText(this.productFormGroup.value.name);
    console.log(this.productFormGroup.value);
    this.productsCollection$
      .add(this.productFormGroup.value)
      .then(() => {
        this.productFormGroup.reset();
        this.snackbar.open('Added NewProduct', 'CLOSE', {
          duration: 3000
        });
      });

  }


}
