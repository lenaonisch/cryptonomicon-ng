import { ActionReducerMap } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { Ticker } from '../Ticker';

export class SubscribedTicker implements Ticker {
  constructor(name: string, price:any = '-') {
    this.name = name;
    this.price = price;
  }
  id?: number | undefined;
  name: string;
  price: any;
  checked?: boolean | undefined;
  intervalID?: Subscription | undefined;
  kill$: Subject<unknown> = new Subject()
}

export interface ITickersState {
  selectedTicker: string;
  tickers: Array<SubscribedTicker>;
}

export interface IGraphState {
  graph?: Array<number>;
}

export interface IApplicationState {
  tickers: ITickersState;
  graph: IGraphState;
}

export const initialState: IApplicationState = {
  tickers: { selectedTicker: '', tickers: [] },
  graph: { graph: [] },
} as IApplicationState;
