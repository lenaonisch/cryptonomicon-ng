import { IApplicationState, initialState, ITickersState } from '../app.state';
import { ETickerActions, TickerActions } from '../actions/ticker.actions';
import { Ticker } from 'src/app/Ticker';

export const tickerReducers = (
  state = initialState.tickers,
  action: TickerActions
): ITickersState => {
  let newState = state;
  switch (action.type) {
    case ETickerActions.AddTicker: {
      let newName = action.payload;
      let newTicker: Ticker = { name: newName, price: '-' };
      if (state.tickers.find((t) => t.name === newName) == undefined) {
        newState.tickers.push(newTicker);
      }
      break;
    }
    case ETickerActions.DeleteTicker: {
      newState.tickers = state.tickers.filter((t) => t.name != action.payload);
      break;
    }
    case ETickerActions.SelectTicker: {
      newState.selectedTicker = action.payload;
      break;
    }
  }
  return {...newState};
};
