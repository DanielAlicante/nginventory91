import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../app1/product.model';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {

  @Input() product: Product;

  ngOnInit() {
  }

}



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-product-department',
//   templateUrl: './product-department.component.html',
//   styleUrls: ['./product-department.component.css']
// })
// export class ProductDepartmentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
