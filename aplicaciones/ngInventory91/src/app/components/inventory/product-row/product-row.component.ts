import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Product } from '../app1/product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';
  ngOnInit() {
  }

}



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-product-row',
//   templateUrl: './product-row.component.html',
//   styleUrls: ['./product-row.component.css']
// })
// export class ProductRowComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
