import { CounterStateDef } from "../states/statedef"


type Counter_Actions_Type_Def = {
    Increment : string,
    Decrement : string
}

export type Counter_Action_Def = {
    type: string, 
    payload : CounterStateDef
}

export const Counter_Actions : Counter_Actions_Type_Def = {
    Increment : 'Increment',
    Decrement : 'Decrement'
}