import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { ProductsService } from '../../../modules/products/products.service';
import { SubSink } from 'subsink';
import { CategoryModel, DefaultCategory } from '../../../models/category.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  selectCategory$: CategoryModel;
  public subs = new SubSink();
  constructor(
    private route: ActivatedRoute,
    public productsService: ProductsService
  ) { }

  ngOnInit() {
    this.subs.add(
      this.route.params.subscribe(data => {
        this.getCategory(data.slug);
      })
    );

  }
  getCategory(category: string) {
    this.selectCategory$ = _.find(DefaultCategory, data => data.slug === category);
    console.log('@@@@@@@@@@@@@@@@@@@');
    console.log(this.selectCategory$);
    console.log(category);
    this.productsService.getCategoryProducts(this.selectCategory$.name);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
