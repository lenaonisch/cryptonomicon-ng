import { Action } from "@ngrx/store";
import { Ticker } from "../../Ticker";

export enum ETickerActions {
    AddTicker = "[Ticker] Add new",
    UpdateTicker = "[Ticker] Update",
    SelectTicker = "[Ticker] Select",
    DeleteTicker = "[Ticker] Delete",
    SetAllTickersFromJSON = "[Ticker] Set ALL from JSON",
}

export class AddNewTicker implements Action {
    readonly type: string = ETickerActions.AddTicker;

    constructor(public payload: string) {
        console.log('ACTION' + this.type);
    }
}

export class UpdateTicker implements Action {
    readonly type: string = ETickerActions.UpdateTicker;

    constructor(public payload: Ticker) {
        console.log('ACTION' + this.type);
    }
}

export class SetAllTickersFromJSON implements Action {
    readonly type: string = ETickerActions.SetAllTickersFromJSON;

    constructor(public payload: string) {
        console.log('ACTION' + this.type);
    }
}

export class SelectTicker implements Action {
    readonly type: string = ETickerActions.SelectTicker;

    constructor(public payload: string) {
        console.log('ACTION' + this.type);
    }
}

export class DeleteTicker implements Action {
    readonly type: string = ETickerActions.DeleteTicker;

    constructor(public payload: string) {
        console.log('ACTION' + this.type);
    }
}

export type TickerActions = AddNewTicker| SelectTicker | DeleteTicker | UpdateTicker;