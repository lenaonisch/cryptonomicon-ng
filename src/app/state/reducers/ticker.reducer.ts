import {
  IApplicationState,
  initialState,
  ITickersState,
  SubscribedTicker,
} from '../app.state';
import {
  addNewTicker,
  deleteTicker,
  selectTicker,
  setAllTickersFromJSON,
  updateTicker,
} from '../actions/ticker.actions';
import { Ticker } from 'src/app/Ticker';
import { Subject } from 'rxjs';
import { createReducer, on } from '@ngrx/store';

export const tickerReducers = createReducer(
  initialState.tickers,
  on(addNewTicker, (state, { name }) => ({
    ...state,
    tickers: state.tickers.concat({
      name: name,
      price: '-',
      kill$: new Subject(),
    }),
  })),
  on(updateTicker, (state, payload) => {
    let tickers = state.tickers.slice();
    let index = tickers.findIndex((t) => t.name === payload.updatedTicker.name);
    if (index > -1) {
      tickers[index] = payload.updatedTicker;
    }
    return {
      ...state,
      tickers: tickers,
    };
  }),
  on(deleteTicker, (state, payload) => ({
    ...state,
    tickers: state.tickers.filter((t) => t.name != payload.name),
  })),
  on(selectTicker, (state, payload) => ({
    ...state,
    selectedTicker: payload.name,
  })),
  on(setAllTickersFromJSON, (state, payload) => ({
    ...state,
    tickers: JSON.parse(payload.payload ?? '[]'),
  }))
);
