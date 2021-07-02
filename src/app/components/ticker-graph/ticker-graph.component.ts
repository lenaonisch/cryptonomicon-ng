import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TickerService } from 'src/app/services/ticker.service';

@Component({
  selector: 'app-ticker-graph',
  templateUrl: './ticker-graph.component.html',
  styleUrls: ['./ticker-graph.component.css']
})
export class TickerGraphComponent implements OnInit {
  tickerName: string = "";
  _subscriptions$: Subscription = new Subscription();
  

  constructor(private tickerService: TickerService) { }

  ngOnInit(): void {
    const selectedTickerSubscription = this.tickerService.selectedTicker$
      .subscribe(name => this.tickerName = name);
    
    this._subscriptions$.add(selectedTickerSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions$.unsubscribe();
  }

  get normalizedGraph() {
    if (this.tickerService.graph!.length > 0){
      const min = Math.min(...this.tickerService.graph!);
      const max = Math.max(...this.tickerService.graph!);

      return this.tickerService.graph?.map((t) => 5 + ((t - min) * 95) / (max - min));
    }
    return [];
  }

  clear(){
    this.tickerService.graph = [];
  }
}
