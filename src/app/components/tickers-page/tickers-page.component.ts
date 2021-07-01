import { Component, OnInit, ViewChild } from '@angular/core';
import { TickersListComponent } from '../tickers-list/tickers-list.component';

@Component({
  selector: 'app-tickers-page',
  templateUrl: './tickers-page.component.html',
  styleUrls: ['./tickers-page.component.css'],
})
export class TickersPageComponent implements OnInit {
  @ViewChild(TickersListComponent) tickersList: TickersListComponent | undefined;

  constructor() {}

  ngOnInit(): void {}

  addTicker(newName: string) {
    newName = newName.toUpperCase();
    this.tickersList?.onTickerAdd(newName);
  }
}
