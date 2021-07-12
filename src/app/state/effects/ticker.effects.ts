import { Injectable } from '@angular/core';
import {
  Actions,
  concatLatestFrom,
  createEffect,
  Effect,
  ofType,
} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap, take, tap } from 'rxjs/operators';
import { TickerService } from 'src/app/services/ticker.service';
import {
  AddNewTicker,
  DeleteTicker,
  ETickerActions,
  TickerActions,
} from '../actions/ticker.actions';
import { IApplicationState } from '../app.state';
import { addedTickers } from '../selectors/ticker.selector';

@Injectable()
export class TickerEffects {
  constructor(
    private _tickerService: TickerService,
    private _actions$: Actions,
    private _store: Store<IApplicationState>
  ) {}

  // handleDelete$ = createEffect(() => {
  //     return this._actions$.pipe(ofType<DeleteTicker>(), () => {
  //     this.tickers.find((t) => t === toRemove)?.intervalID?.unsubscribe();

  //     this.tickerDeleted.emit(toRemove.name);

  //     localStorage.setItem('watched-coins', JSON.stringify(this.tickers));})
  // })

  onTickerAdd$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(
          ETickerActions.AddTicker,
          ETickerActions.UpdateTicker,
          ETickerActions.DeleteTicker
        ),
        concatLatestFrom((action) => this._store.select(addedTickers)),
        tap(([action, tickers]) => {
          window.localStorage.setItem('watched-coins', JSON.stringify(tickers));
        })
      ),
    { dispatch: false }
  );
}
