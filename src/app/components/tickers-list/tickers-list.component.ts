import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Ticker } from 'src/app/Ticker';

@Component({
  selector: 'app-tickers-list',
  templateUrl: './tickers-list.component.html',
  styleUrls: ['./tickers-list.component.css']
})
export class TickersListComponent implements OnInit {
  @Output() tickerDeleted = new EventEmitter<string>();
  
  page: number = 1;
  tickers: Array<Ticker> = [];
  paginatedTickers: Array<Ticker> = [];
  isTickerExists: boolean = false;
  
  constructor() { 
    
  }

  ngOnInit(): void {
    this.getAddedCoins();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.prop);
    if (this.tickers) {
      this.tickers.forEach((t) => this.subscribeForUpdates(t.name));
    } else {
      this.tickers = [];
    }
  }

  getAddedCoins() {
    let storedTickers = localStorage.getItem('watched-coins');
    this.tickers = JSON.parse(storedTickers ?? '[]');
  }

  onTickerAdd(newName: string) {
    let newTicker: Ticker = { name: newName, price: '-' };
    if (this.tickers.find((t) => t.name === newName) == undefined) {
      this.isTickerExists = false;
      this.tickers.push(newTicker);
      this.subscribeForUpdates(newTicker.name);

      localStorage.setItem('watched-coins', JSON.stringify(this.tickers));
      // if (this.tickers.length > this.page * 6) {
      //   this.page = Math.floor(this.tickers.length / 6 + 1);
      // }
    } else {
      this.isTickerExists = true;
    }
  }

  handleDelete(toRemove: Ticker) {
    clearInterval(this.tickers.find((t) => t === toRemove)?.intervalID);
    this.tickers = this.tickers.filter((t) => t != toRemove);
    
    this.tickerDeleted.emit(toRemove.name);
    
    localStorage.setItem("watched-coins", JSON.stringify(this.tickers));
  }

  subscribeForUpdates(tickerName: string) {
    // eslint-disable-next-line no-unused-vars
    let intervalID = setInterval(async () => {
      console.log(tickerName);
      // let response = await fetch(
      //   `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=aa9434795b47744b609cbde1f458c1f0b1d0548c273327fd6c5b06209e6e9282`
      // );
      // const data = await response.json();
      // let t = this.tickers.find((t) => t.name === tickerName);
      // t.price = data.USD;
      // t.intervalID = intervalID;
      // if (this.selectedTicker?.name === tickerName) {
      //   this.$refs.graphComponent.graph.push(data.USD);
      // }
    }, 3000);
  }
}
