import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Product } from './../app1/product.model';

@Component({
  selector: 'app-product-image',
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
  ngOnInit() {
  }

}





// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-product-image',
//   templateUrl: './product-image.component.html',
//   styleUrls: ['./product-image.component.css']
// })
// export class ProductImageComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
