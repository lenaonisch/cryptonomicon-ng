import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Ticker } from 'src/app/Ticker';
import { TickerService } from 'src/app/services/ticker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tickers-list',
  templateUrl: './tickers-list.component.html',
  styleUrls: ['./tickers-list.component.css']
})
export class TickersListComponent implements OnInit {
  @Output() tickerDeleted = new EventEmitter<string>();
  @Output() tickerSelected = new EventEmitter<string>();

  page: number = 1;
  tickers: Array<Ticker> = [];
  paginatedTickers: Array<Ticker> = [];
  isTickerExists: boolean = false;
  selectedTicker$: Observable<string> | null = null;
  
  constructor(private tickerService: TickerService) { 
    
  }

  ngOnInit(): void {
    this.getAddedCoins();
    this.selectedTicker$ = this.tickerService.selectedTicker$;
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
    let intervalID = window.setInterval(async () => {
      console.log(tickerName);
      this.tickerService.getTickerPrice(tickerName).subscribe((response) =>{
        let t = this.tickers.find((t) => t.name === tickerName);
        t!.price = response.USD;
        t!.intervalID = intervalID;
        this.tickerService.selectedTicker$.subscribe((value) => {
          if(value === tickerName){this.tickerService.graph?.push(response.USD)}
        }) 
      })
    }, 3000);
  }

  select(tickerName: string){
    //this.tickerSelected.emit(tickerName);
    this.tickerService.selectTicker(tickerName);
  }
}
