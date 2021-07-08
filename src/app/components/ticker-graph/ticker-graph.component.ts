import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TickerService } from 'src/app/services/ticker.service';
import { ClearGraph, IApplicationState } from 'src/app/state';
import { normalizedGraph } from 'src/app/state/selectors/graph.selector';

@Component({
  selector: 'app-ticker-graph',
  templateUrl: './ticker-graph.component.html',
  styleUrls: ['./ticker-graph.component.css']
})
export class TickerGraphComponent implements OnInit {
  tickerName: string = "";
  _subscriptions$: Subscription = new Subscription();
  normalizedGraph$ = this._store.pipe(select(normalizedGraph));

  constructor(private tickerService: TickerService, private _store: Store<IApplicationState>) { }
  ngOnInit(): void {
    const selectedTickerSubscription = this.tickerService.selectedTicker$
      .subscribe(name => this.tickerName = name);
    
    this._subscriptions$.add(selectedTickerSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  } 

  clear(){
    this._store.dispatch(new ClearGraph(0));
  }
}
