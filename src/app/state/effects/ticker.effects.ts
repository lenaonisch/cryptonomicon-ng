import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TickerService } from "src/app/services/ticker.service";
import { AddNewTicker, DeleteTicker, TickerActions } from "../actions/ticker.actions";
import { IApplicationState } from "../app.state";

@Injectable()
export class TickerEffects {
    constructor(
        private _tickerService: TickerService,
        private _actions$: Actions,
        private _store: Store<IApplicationState>
    ) { }
    
    // handleDelete$ = createEffect(() => {
    //     return this._actions$.pipe(ofType<DeleteTicker>(), () => {
    //     this.tickers.find((t) => t === toRemove)?.intervalID?.unsubscribe();
        
    //     this.tickerDeleted.emit(toRemove.name);
    
    //     localStorage.setItem('watched-coins', JSON.stringify(this.tickers));})
    // })

    // onTickerAdd$ = createEffect(() => 
    //     this._actions$.pipe(
    //         ofType<AddNewTicker>(),
            

    // )

}