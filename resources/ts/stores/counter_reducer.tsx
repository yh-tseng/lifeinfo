import {CounterStateDef, CounterInitState} from './states/statedef'
import {Counter_Actions, Counter_Action_Def} from './actions/actions_def_counter'

export const CounterReducer = (state:CounterStateDef = CounterInitState, action: Counter_Action_Def) => {

    let counterState:CounterStateDef = state

    switch(action.type){
        case Counter_Actions.Increment:
            counterState = {counter : action.payload.counter + 1}
            break;
        case Counter_Actions.Decrement:
            counterState = {counter : action.payload.counter - 1}
            break;
    }

    return counterState;
}