import { Component, OnInit, ViewChild } from '@angular/core';
import { TickerService } from 'src/app/services/ticker.service';
import { ConditionalAdvertComponent } from '../adverts/conditional-advert/conditional-advert.component';
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

  isGraphVisible: boolean = false;

  constructor(private tickerService: TickerService) { }

  ngOnInit(): void {
    this.tickerService.selectedTicker$.subscribe((name) => {
      this.isGraphVisible = name != '';
    })
  }

  addTicker(newName: string) {
    newName = newName.toUpperCase();
    this.tickersList?.onTickerAdd(newName);
  }

  clearGraph(name: string) {
    this.tickerGraph?.clear();
  }
}
