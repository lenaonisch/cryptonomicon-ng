import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTickerComponent } from './components/add-ticker/add-ticker.component';
import { TickersListComponent } from './components/tickers-list/tickers-list.component';
import { IconedButtonComponent } from './components/iconed-button/iconed-button.component';
import { TickersPageComponent } from './components/tickers-page/tickers-page.component';
import { FormsModule } from '@angular/forms';
import { TickerGraphComponent } from './components/ticker-graph/ticker-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTickerComponent,
    TickersListComponent,
    IconedButtonComponent,
    TickersPageComponent,
    TickerGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
