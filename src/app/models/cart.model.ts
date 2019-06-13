import { Product } from './product.model';

export interface CartModel {
  basket: Product[];
  cartTotal?: number;
}
