import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  template: `
  <div class="price-display">\${{ price }}</div>
  `,
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {

  @Input() price: number;

  ngOnInit() {
  }

}






// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-price-display',
//   templateUrl: './price-display.component.html',
//   styleUrls: ['./price-display.component.css']
// })
// export class PriceDisplayComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
