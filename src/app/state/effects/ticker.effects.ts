import { Injectable } from '@angular/core';
import {
  Actions,
  concatLatestFrom,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { createAction, props, select, Store } from '@ngrx/store';
import { EMPTY, interval, Observable, of, Subject, timer } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mapTo,
  mergeMap,
  skip,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { TickerService } from 'src/app/services/ticker.service';
import {
  addNewTicker,
  tickerUpdateFailed,
  updateTicker,
} from '../actions/ticker.actions';
import { IApplicationState, SubscribedTicker } from '../app.state';
import { addedTickers } from '../selectors/ticker.selector';

@Injectable()
export class TickerEffects {
  constructor(
    private _tickerService: TickerService,
    private _actions$: Actions,
    private _store: Store<IApplicationState>
  ) {}

  randomNumberPolling$ = createEffect(() =>
    //({ scheduler = asyncScheduler, stopTimer = EMPTY } = {}) =>
    this._actions$.pipe(
      // Filter action type
      ofType(addNewTicker),
      // Get the polling interval
      // withLatestFrom((action) => this._store.pipe(
      //     select(addedTickers),
      //     filter((tickers, i) => tickers[i].name === action.name ),
      //     take(1))),
      switchMap((action) =>
        // Start polling
        interval(1000).pipe(
          // Stop the polling (used only in testing)
          skip(1),
          switchMap(() =>
            this._tickerService.getTickerPrice(action.name).pipe(
              map((data) =>
                updateTicker({
                  updatedTicker: new SubscribedTicker(data.name, data.USD),
                })
              ),
              catchError((error) => {
                console.error(error);
                return of(tickerUpdateFailed({ error }));
              })
            )
          ),
        //   takeUntil(
        //     this._store.pipe(
        //       select(addedTickers),
        //       filter((tickers, i) => tickers[i]?.name !== action.name)
        //     )
        //   )
        )
      )
    )
  );

  //   subscribeTickers$ = createEffect(() =>
  //     this._actions$.pipe(
  //       ofType(ETickerActions.AddTicker),
  //       switchMap((action$: AddNewTicker) =>
  //         interval(1000).pipe(
  //           switchMap(() => {
  //             this._tickerService.getTickerPrice(action$.payload).pipe(
  //               map(
  //                 (data) =>
  //                   new UpdateTicker({
  //                     price: data.USD,
  //                     name: action$.payload,
  //                     kill$: new Subject(),
  //                   })
  //               ),
  //               catchError((error) => {
  //                 console.error(error);
  //                 return of(new UpdateFailed())
  //               })
  //             );
  //           })
  //         )
  //       )
  //     )
  //   );

  //   updateTicker$ = createEffect(() =>
  //     this._actions$.pipe(
  //       ofType(ETickerActions.UpdateTicker),
  //       interval(1000).pipe(() =>
  //         this._tickerService.getTickerPrice(action$.payload.name).pipe(
  //           map(
  //             (data) =>
  //               new UpdateTicker({
  //                 name: data.name,
  //                 price: data.USD,
  //                 kill$: new Subject(),
  //               })
  //           )
  //         )
  //       )
  //     )
  //   );

  //       switchMap((action$: UpdateTicker) =>
  //         timer(1000, 1000).pipe(() =>
  //           this._tickerService.getTickerPrice(action$.payload.name).pipe(
  //             map(
  //               (data) =>
  //                 new UpdateTicker({
  //                   name: data.name,
  //                   price: data.USD,
  //                   kill$: new Subject(),
  //                 })
  //             )
  //           )
  //         )
  //       )
  //     )
  //   );

  //   subscribeTickers$ = createEffect(() =>
  //     this._actions$.pipe(
  //       ofType(ETickerActions.AddTicker),
  //       mergeMap(
  //         (action$: AddNewTicker) => {
  //           interval(1000).pipe(
  //             map((i: number) =>
  //               this._tickerService.getTickerPrice(action$.payload).pipe(
  //                 mapTo((data: { USD: any; name: any }) => {
  //                   const kill$ = new Subject();
  //                   new UpdateTicker({
  //                     price: data.USD,
  //                     name: data.name,
  //                     kill$: kill$,
  //                   });
  //                 })
  //               )
  //             )

  //             // takeUntil(kill$),
  //           );
  //         },
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   );

  //   modifyLocalStorage$ = createEffect(
  //     () =>
  //       this._actions$.pipe(
  //         ofType(
  //           ETickerActions.AddTicker,
  //           ETickerActions.UpdateTicker,
  //           ETickerActions.DeleteTicker
  //         ),
  //         concatLatestFrom((action) => this._store.select(addedTickers)),
  //         tap(([action, tickers]) => {
  //           window.localStorage.setItem('watched-coins', JSON.stringify(tickers));
  //         })
  //       ),
  //     { dispatch: false }
  //   );
}
