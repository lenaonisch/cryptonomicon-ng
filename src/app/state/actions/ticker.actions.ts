import { Action, createAction, props } from '@ngrx/store';
import { Ticker } from '../../Ticker';
import { SubscribedTicker } from '../app.state';

export enum ETickerActions {
  AddTicker = '[Ticker] Add new',
  UpdateTicker = '[Ticker] Update',
  TickerUpdated = '[Ticker] Updated',
  UpdateFailed = '[Ticker] Update failed',
  SelectTicker = '[Ticker] Select',
  DeleteTicker = '[Ticker] Delete',
  SetAllTickersFromJSON = '[Ticker] Set ALL from JSON',
}

export const addNewTicker = createAction(
  ETickerActions.AddTicker,
  props<{ name: string }>()
);

export const updateTicker = createAction(
  ETickerActions.UpdateTicker,
  props<{ updatedTicker: SubscribedTicker }>()
);

export const tickerUpdateFailed = createAction(
  ETickerActions.UpdateFailed,
  props<{ error: any }>()
);

export const setAllTickersFromJSON = createAction(
  ETickerActions.SetAllTickersFromJSON,
  props<{ payload: string }>()
);

export class TickerUpdated implements Action {
  readonly type: string = ETickerActions.TickerUpdated;

  constructor() {
    console.log('ACTION' + this.type);
  }
}

export const selectTicker = createAction(
  ETickerActions.SelectTicker,
  props<{ name: string }>()
);

export const deleteTicker = createAction(
  ETickerActions.DeleteTicker,
  props<{ name: string }>()
);
