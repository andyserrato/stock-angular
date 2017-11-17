import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../../services/stocks.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subscription: Subscription;
  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  ngOnInit() {
    this.subscription = this.service.load(this.symbols).subscribe(
      stocks => this.stocks = stocks,
    () => this.stocksManually());
  }

  stocksManually() {
    this.stocks = new Array<any>();
    this.symbols.forEach(_symbol => {
      const stock = {
        symbol: _symbol,
        lastTradePriceOnly: (Math.random() * 100),
        change: (Math.random() * 100) + 1,
        changeInPercent: Math.random()
      };
      this.stocks.push(stock);

    });
  }
}
