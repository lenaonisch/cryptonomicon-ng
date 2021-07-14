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
import { interval, Observable, Subscription } from 'rxjs';
import { filter, skip, take } from 'rxjs/operators';
import {
  AddGraphValue,
  addNewTicker,
  deleteTicker,
  IApplicationState,
  setAllTickersFromJSON,
} from 'src/app/state';
import { select, Store } from '@ngrx/store';
import { IGraphState, ITickersState } from 'src/app/state/app.state';
import {
  addedTickers,
  selectedTicker,
  tickersLength,
} from 'src/app/state/selectors/ticker.selector';

@Component({
  selector: 'app-tickers-list',
  templateUrl: './tickers-list.component.html',
  styleUrls: ['./tickers-list.component.css'],
})
export class TickersListComponent implements OnInit {
  @Output() tickerDeleted = new EventEmitter<string>();
  @Output() tickerSelected = new EventEmitter<string>();

  page: number = 1;
  filter: string = '';
  isTickerExists: boolean = false;
  _subscriptions$: Subscription = new Subscription();
  isShowTickersList: boolean = false;
  isForwardPageEnabled: boolean = false;
  selectedTicker: string | null = null;
  pageSize: number = 2;
  filteredTickers: Array<Ticker> = [];
  //   let ticker$ = this._store.select(addedTickers);
  //   if (this.filter !== '') {
  //     return ticker$.pipe(
  //       filter((t, i) => t[i].name.includes(this.filter.toUpperCase()))
  //     );
  //   }
  //   return ticker$;
  // }

  constructor(
    private tickerService: TickerService,
    private _store: Store<IApplicationState>
  ) {
    this._subscriptions$.add(
      this._store.select(tickersLength).subscribe((len) => {
        this.isShowTickersList = len > 0;
        this.isForwardPageEnabled = len / this.pageSize > this.page;
      })
    );
    this._subscriptions$.add(
      this._store.select(selectedTicker).subscribe((ticker) => {
        this.selectedTicker = ticker;
      })
    );
    this._subscriptions$.add(
      this._store.select(addedTickers).subscribe((tickers) => {
        this.filteredTickers = tickers;
      })
    );
  }

  get() {
    return;
  }

  get backwardPageEnabled() {
    return this.page > 1; //because page is increased first
  }

  get paginatedTickers() {
    return this.filteredTickers.slice(this.startIndex, this.pageSize);
    // return this.filteredTickers.pipe(
    //   skip(this.startIndex),
    //   take(this.pageSize)
    // );
  }

  get startIndex() {
    return (this.page - 1) * this.pageSize;
  }

  get endIndex() {
    return this.page * this.pageSize;
  }

  ngOnInit(): void {
    this.getAddedCoins();
    //this.selectedTicker$ = this.tickerService.selectedTicker$;
    //this.tickers.forEach((t) => this.subscribeForUpdates(t.name));
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes.prop);
  //   if (this.tickers) {
  //     this.tickers.forEach((t) => this.subscribeForUpdates(t.name));
  //   } else {
  //     this.tickers = [];
  //   }
  // }
  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }
  
  getAddedCoins() {
    let storedTickers = localStorage.getItem('watched-coins')!;
    this._store.dispatch(setAllTickersFromJSON({payload: storedTickers}));
  }

  onTickerAdd(newName: string) {
    let newTicker: Ticker = { name: newName, price: '-' };
    this._store.dispatch(addNewTicker({name: newName})); //new AddNewTicker(newName));
    // if (this.tickers.find((t) => t.name === newName) == undefined) {
    // //   this.isTickerExists = false;
    // //   this.tickers.push(newTicker);
    //   this.subscribeForUpdates(newTicker.name);

    //   //localStorage.setItem('watched-coins', JSON.stringify(this.tickers));
    //   // if (this.tickers.length > this.page * 6) {
    //   //   this.page = Math.floor(this.tickers.length / 6 + 1);
    //   // }
    // } else {
    //   this.isTickerExists = true;
    // }
  }

  handleDelete(toRemove: Ticker) {
    toRemove.intervalID?.unsubscribe();
    this._store.dispatch(deleteTicker({name: toRemove.name}));
    //this.tickers = this.tickers.filter((t) => t != toRemove);

    this.tickerDeleted.emit(toRemove.name);

    //localStorage.setItem('watched-coins', JSON.stringify(this.tickers));
  }

  

  select(tickerName: string) {
    //this.tickerSelected.emit(tickerName);
    this.tickerService.selectTicker(tickerName);
  }
  onForwardClick() {
    if (this.isForwardPageEnabled) {
      this.page++;
    }
  }

  onBackwardClick() {
    if (this.backwardPageEnabled) {
      this.page--;
    }
  }
}
