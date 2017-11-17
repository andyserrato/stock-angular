import { Component, Input } from '@angular/core';

@Component({
 selector: 'summary',
 styleUrls: ['./summary.component.css'],
 templateUrl: './summary.component.html'
})
export class SummaryComponent {
 @Input() stock: any;

 isNegative() {
   return (this.stock && this.stock.change < 0);
 }

 isPositive() {
   return (this.stock && this.stock.change > 0);
 }
}