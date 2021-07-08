import { ActionReducerMap } from '@ngrx/store';
import { IApplicationState } from './app.state';
import { graphReducers } from './reducers/graph.reducer';
import { tickerReducers } from './reducers/ticker.reducer';

export * from './actions/ticker.actions';
export * from './actions/graph.actions';
export { IApplicationState, initialState } from './app.state';

export const appReducers: ActionReducerMap<IApplicationState, any> = {
    tickers: tickerReducers,
    graph: graphReducers
}