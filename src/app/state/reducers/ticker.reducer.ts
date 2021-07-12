import { IApplicationState, initialState, ITickersState } from '../app.state';
import { ETickerActions, TickerActions } from '../actions/ticker.actions';
import { Ticker } from 'src/app/Ticker';

export const tickerReducers = (
  state = initialState.tickers,
  action: TickerActions
): ITickersState => {
  let newState = {...state, tickers: state.tickers.slice()};
  switch (action.type) {
    case ETickerActions.AddTicker: {
      let newName = action.payload as string;
      let newTicker: Ticker = { name: newName, price: '-' };
      if (state.tickers.find((t) => t.name === newName) == undefined) {
        newState.tickers.push(newTicker);
      }
      break;
    }
    case ETickerActions.UpdateTicker: {
        let newTicker: Ticker = action.payload as Ticker;
        let index = state.tickers.findIndex((t) => t.name === newTicker.name);
        if (index > -1) {
          newState.tickers[index] = newTicker;
        }
        break;
      }
    case ETickerActions.DeleteTicker: {
      newState.tickers = state.tickers.filter((t) => t.name != action.payload);
      break;
    }
    case ETickerActions.SelectTicker: {
      newState.selectedTicker = action.payload as string;
      break;
    }
    case ETickerActions.SetAllTickersFromJSON: {
      newState.tickers = JSON.parse(action.payload as string?? '[]');
    }
  }
  return { ...newState };
};
