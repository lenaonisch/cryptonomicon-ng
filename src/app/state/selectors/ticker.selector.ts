import { createSelector } from '@ngrx/store';
import { IApplicationState, ITickersState } from '../app.state';

const tickerState = (state: IApplicationState) => state.tickers;
export const selectedTicker = createSelector(tickerState, (state: ITickersState) => {
  return state.selectedTicker;
});

export const tickersLength = createSelector(tickerState, (state: ITickersState) => {
    return state.tickers.length;
});

export const addedTickers = createSelector(tickerState, (state: ITickersState) => {
  return state.tickers;
});