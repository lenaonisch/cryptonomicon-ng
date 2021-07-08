import { ActionReducerMap } from '@ngrx/store';
import { Ticker } from '../Ticker';

export interface ITickersState {
  selectedTicker: string;
  tickers: Array<Ticker>;
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
