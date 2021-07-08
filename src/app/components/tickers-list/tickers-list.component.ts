import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ticker } from 'src/app/Ticker';
import { TickerService } from 'src/app/services/ticker.service';
import { interval, Observable } from 'rxjs';
import { AddGraphValue, IApplicationState } from 'src/app/state';
import { select, Store } from '@ngrx/store';
import { IGraphState } from 'src/app/state/app.state';

@Component({
  selector: 'app-tickers-list',
  templateUrl: './tickers-list.component.html',
  styleUrls: ['./tickers-list.component.css'],
})
export class TickersListComponent implements OnInit {
  @Output() tickerDeleted = new EventEmitter<string>();
  @Output() tickerSelected = new EventEmitter<string>();

  page: number = 1;
  tickers: Array<Ticker> = [];
  filter: string = '';
  isTickerExists: boolean = false;
  selectedTicker$: Observable<string> | null = null;
  pageSize: number = 2;
  get forwardPageEnabled() {
    return this.tickers.length / this.pageSize > this.page; //because page is increased first
  }

  get backwardPageEnabled() {
    return this.page > 1; //because page is increased first
  }

  get filteredTickers() {
    if (this.filter !== '') {
      return this.tickers.filter((t) =>
        t.name.includes(this.filter.toUpperCase())
      );
    }
    return this.tickers;
  }

  get paginatedTickers() {
    return this.filteredTickers.slice(this.startIndex, this.endIndex);
  }

  get startIndex() {
    return (this.page - 1) * this.pageSize;
  }

  get endIndex() {
    return this.page * this.pageSize;
  }

  constructor(private tickerService: TickerService, private _store: Store<IApplicationState>) {}

  ngOnInit(): void {
    this.getAddedCoins();
    this.selectedTicker$ = this.tickerService.selectedTicker$;
    this.tickers.forEach((t) => this.subscribeForUpdates(t.name));
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes.prop);
  //   if (this.tickers) {
  //     this.tickers.forEach((t) => this.subscribeForUpdates(t.name));
  //   } else {
  //     this.tickers = [];
  //   }
  // }

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
    this.tickers.find((t) => t === toRemove)?.intervalID?.unsubscribe();
    this.tickers = this.tickers.filter((t) => t != toRemove);

    this.tickerDeleted.emit(toRemove.name);

    localStorage.setItem('watched-coins', JSON.stringify(this.tickers));
  }

  subscribeForUpdates(tickerName: string) {
    let t = this.tickers.find((t) => t.name === tickerName);
    const intervalID = interval(1000).subscribe((response) => {
      this.tickerService.getTickerPrice(tickerName).subscribe((response) => {
        console.log(response);
        t!.price = response.USD;
        t!.intervalID = intervalID;
        this.tickerService.selectedTicker$.subscribe((value) => {
          if (value === tickerName) {
            this._store.dispatch(new AddGraphValue(response.USD))
          }
        });
      });
    });
  }

  select(tickerName: string) {
    //this.tickerSelected.emit(tickerName);
    this.tickerService.selectTicker(tickerName);
  }
  onForwardClick() {
    if (this.forwardPageEnabled) {
      this.page++;
    }
  }

  onBackwardClick() {
    if (this.backwardPageEnabled) {
      this.page--;
    }
  }
}
