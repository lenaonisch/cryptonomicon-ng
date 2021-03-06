import { Subscription } from "rxjs";

export interface Ticker {
    id? : number,
    name: string,
    price: any,
    checked?: boolean,
    intervalID?: Subscription
}