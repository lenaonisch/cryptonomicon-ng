import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddTickerComponent } from './components/add-ticker/add-ticker.component';
import { TickersListComponent } from './components/tickers-list/tickers-list.component';
import { IconedButtonComponent } from './components/iconed-button/iconed-button.component';
import { TickersPageComponent } from './components/tickers-page/tickers-page.component';
import { TickerGraphComponent } from './components/ticker-graph/ticker-graph.component';
import { SimpleAdvertComponent } from './components/adverts/simple-advert/simple-advert.component';
import { ComplexAdvertComponent } from './components/adverts/complex-advert/complex-advert.component';
import { ConditionalAdvertComponent } from './components/adverts/conditional-advert/conditional-advert.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RouteDependentComponent } from './components/base/route-dependent/route-dependent.component';

const appRoutes: Routes = [
  { path: '', component: TickersPageComponent },
  { path: 'simpleAdvert', component: SimpleAdvertComponent },
  { path: 'complexAdvert', component: ComplexAdvertComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddTickerComponent,
    TickersListComponent,
    IconedButtonComponent,
    TickersPageComponent,
    TickerGraphComponent,
    SimpleAdvertComponent,
    ComplexAdvertComponent,
    ConditionalAdvertComponent,
    HeaderComponent,
    AboutComponent,
    RouteDependentComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule, RouterModule.forRoot(appRoutes, {enableTracing: true})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
