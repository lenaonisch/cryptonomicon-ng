import { Injectable } from '@angular/core';
import { Ticker } from 'src/app/Ticker';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TickerService {
  url: string = "https://min-api.cryptocompare.com/data/blockchain/";
  apikey: string = "?api_key=aa9434795b47744b609cbde1f458c1f0b1d0548c273327fd6c5b06209e6e9282";
  constructor(private http:HttpClient) { }

  selectedTicker = new BehaviorSubject<string>("");
  
  getTickerPrice(tickerName: string){

  }

  fetchAwailableCoins() {
    return this.http.get<Response>(`${this.url}list${this.apikey}`);
  }
}

class Response{
  Data?: any
}
