import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Properties
  items = [];

  // Constructor
  constructor(
    private http: HttpClient
  ) {}

  // Method Functions - addToCart function
  addToCart(product) {
    this.items.push(product);
  }

  // Method Functions - getItems function
  getItems() {
    return this.items;
  }

  // Method Functions - clearCart function
  clearCart() {
    this.items = [];
    return this.items;
  }

  // Method Functions - getShippingPrices function
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}
