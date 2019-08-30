import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  // Properties
  shippingCosts;

  // Constructor
  constructor(
    private cartService: CartService
  ) { }

  // Initialize
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
