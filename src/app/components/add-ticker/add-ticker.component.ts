import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef, ContentChildren } from '@angular/core';
import { Ticker } from 'src/app/Ticker';
import { TickerService } from 'src/app/services/ticker.service';
import { ConditionalAdvertComponent } from '../adverts/conditional-advert/conditional-advert.component';
@Component({
  selector: 'app-add-ticker',
  templateUrl: './add-ticker.component.html',
  styleUrls: ['./add-ticker.component.css'],
})
export class AddTickerComponent implements OnInit {
  @Input() addedCoins: Array<Ticker>;
  @Input() anyElementChecked: boolean = true;
  @Output() addTicker = new EventEmitter<string>();
  @ContentChildren(ConditionalAdvertComponent) content!: ConditionalAdvertComponent;

  ticker: string = "";
  availableCoins: Array<string> = [];
  isTickerAwailable: boolean = false;
  isTickerExist: boolean = false;
  tips: Array<string> = [];

  addButtonIconPath: string = "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z";

  constructor(private tickerService:TickerService) {
    this.addedCoins = [];
  }

  ngOnInit(): void {
    
    this.tickerService.fetchAwailableCoins().subscribe((response) => this.availableCoins = Object.keys(response.Data));
  }

  addTickerHandler(newName = this.ticker) {
    newName = newName.toUpperCase();
    this.isTickerAwailable = this.availableCoins.findIndex((t) => t === newName) > 0;
    if (this.isTickerAwailable) {
      this.addTicker.emit(newName);
      this.ticker = "";
    }
  }

  findTips() {
    this.isTickerExist = false;
    this.tips = this.availableCoins
      .filter((t) => t.includes(this.ticker.valueOf().toUpperCase()))
      .slice(0, 4);
  }
}
