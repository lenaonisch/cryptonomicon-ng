import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticker-graph',
  templateUrl: './ticker-graph.component.html',
  styleUrls: ['./ticker-graph.component.css']
})
export class TickerGraphComponent implements OnInit {
  @Input() tickerName: string = "";
  graph?: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
  }

  get normalizedGraph() {
    if (this.graph!.length > 0){
    const min = Math.min(...this.graph!);
    const max = Math.max(...this.graph!);

    return this.graph?.map((t) => 5 + ((t - min) * 95) / (max - min));
    }
    return [];
  }

  clear(){
    this.graph = [];
  }
}
