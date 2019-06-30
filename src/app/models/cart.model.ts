import { Product } from './product.model';

export interface CartModel {
  basket: Product[];
  cartTotal?: number;
}

export interface ShippingModel {
  address_1: string;
  address_2?: string;
  country: string;
  city: string;
  state: string;
  zip: string;
  phone_number: string;
  details?: string;
}
