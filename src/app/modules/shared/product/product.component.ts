import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  addToBasket() {
    this.sharedService.addToBasket(this.data);
  }

}
