import { Action } from "@ngrx/store";
import { Ticker } from "../../Ticker";

export enum ETickerActions {
    AddTicker = "[Ticker] Add new",
    SelectTicker = "[Ticker] Select",
    DeleteTicker = "[Ticker] Delete",
}

export class AddNewTicker implements Action {
    readonly type: string = ETickerActions.AddTicker;

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

export type TickerActions = AddNewTicker| SelectTicker | DeleteTicker;