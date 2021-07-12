import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { TickerService } from 'src/app/services/ticker.service';
import { IApplicationState } from 'src/app/state';
import { selectedTicker } from 'src/app/state/selectors/ticker.selector';
import { AddTickerComponent } from '../add-ticker/add-ticker.component';
import { ConditionalAdvertComponent } from '../adverts/conditional-advert/conditional-advert.component';
import { TickerGraphComponent } from '../ticker-graph/ticker-graph.component';
import { TickersListComponent } from '../tickers-list/tickers-list.component';

@Component({
  selector: 'app-tickers-page',
  templateUrl: './tickers-page.component.html',
  styleUrls: ['./tickers-page.component.css'],
})
export class TickersPageComponent implements OnInit {
  @ViewChild(TickersListComponent) tickersList:
    | TickersListComponent
    | undefined;
  @ViewChild(TickerGraphComponent) tickerGraph:
    | TickerGraphComponent
    | undefined;
  @ViewChild(AddTickerComponent) tickerSource: AddTickerComponent | undefined;

  isGraphVisible: boolean = false;
  isSpinnerVisible: boolean = true;

  constructor(private tickerService: TickerService, private _store: Store<IApplicationState>) {}

  ngOnInit(): void {
    this._store.select(selectedTicker).subscribe((name) => {
      this.isGraphVisible = name != '';
    });
    this.tickerService.fetchAwailableCoins().subscribe({
      next: () => {},
      complete: () => {
        this.turnOffSpinner();
      },
    });
  }

  addTicker(newName: string) {
    newName = newName.toUpperCase();
    this.tickersList?.onTickerAdd(newName);
  }

  clearGraph(name: string) {
    this.tickerGraph?.clear();
  }

  turnOffSpinner() {
    this.isSpinnerVisible = false;
  }
}
