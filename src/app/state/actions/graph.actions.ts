import { Action } from "@ngrx/store";

export enum EGraphActions {
    AddValue = "[Graph] Add value",
    Clear = "[Graph] Clear"
}

export class AddGraphValue implements Action {
    readonly type: string = EGraphActions.AddValue;

    constructor(public payload: number) {
        console.log('ACTION' + this.type);
    }
}

export class ClearGraph implements Action {
    readonly type: string = EGraphActions.Clear;

    constructor(public payload: number) {
        console.log('ACTION' + this.type);
    }
}

export type GraphActions = AddGraphValue | ClearGraph;

