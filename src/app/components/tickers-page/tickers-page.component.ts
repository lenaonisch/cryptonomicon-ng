import { Component, OnInit, ViewChild } from '@angular/core';
import { TickerGraphComponent } from '../ticker-graph/ticker-graph.component';
import { TickersListComponent } from '../tickers-list/tickers-list.component';

@Component({
  selector: 'app-tickers-page',
  templateUrl: './tickers-page.component.html',
  styleUrls: ['./tickers-page.component.css'],
})
export class TickersPageComponent implements OnInit {
  @ViewChild(TickersListComponent) tickersList: TickersListComponent | undefined;
  @ViewChild(TickerGraphComponent) tickerGraph: TickerGraphComponent | undefined;

  constructor() {}

  ngOnInit(): void {}

  addTicker(newName: string) {
    newName = newName.toUpperCase();
    this.tickersList?.onTickerAdd(newName);
  }

  clearGraph(name: string) {
    this.tickerGraph?.clear();
  }
}
