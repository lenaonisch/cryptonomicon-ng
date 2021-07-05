import { Injectable } from '@angular/core';
import { Ticker } from 'src/app/Ticker';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TickerService {
  url: string = "https://min-api.cryptocompare.com/data/";
  apikey: string = "api_key=aa9434795b47744b609cbde1f458c1f0b1d0548c273327fd6c5b06209e6e9282";
  constructor(private http:HttpClient) { }

  graph?: Array<number> = [];
  private selectedTickerSource = new BehaviorSubject<string>("");
  selectedTicker$ = this.selectedTickerSource.asObservable();

  selectTicker(name: string) {
    this.selectedTickerSource.next(name);
  }

  getTickerPrice(tickerName: string){
    //return this.http.get<TickeResponse>("http://localhost:5000/getrandom");
    //return this.http.get<TickeResponse>(`${this.url}price?fsym=${tickerName}&tsyms=USD&${this.apikey}`);
    return of({USD: Math.random()*100});
  }

  fetchAwailableCoins() {
    //return this.http.get<Response>("http://localhost:5000/getCoins");
    return this.http.get<Response>(`${this.url}blockchain/list?${this.apikey}`);
    //return of({Data:[{BTC:1}, {DOGE: 2}, {ABYSS: 3}]});
  }
}

class Response{
  Data?: any
}

class TickeResponse {
  USD: number = 0
}
