import React from 'react';
import ReactDOM from 'react-dom'
import {Provider, useSelector, useDispatch} from 'react-redux'
import {createStore} from 'redux'

import {Counter_Action_Def, Counter_Actions} from '../stores/actions/actions_def_counter'
import {CounterReducer} from '../stores/counter_reducer'
import {CounterStateDef} from '../stores/states/statedef'

const Welcome : React.FC<{}> = () => {

    const counter = useSelector<CounterStateDef, number>(state => state.counter);

    const dispatch = useDispatch();

    function increment(){
        const action:Counter_Action_Def = {
            type: Counter_Actions.Increment,
            payload: {counter:counter}
        }

        dispatch(action);
    }

    return (
        <div>
            <span>{counter}</span><br/>
            <button onClick={increment}>+</button>
        </div>
    )
};


export default Welcome;

const store = createStore(CounterReducer)

if (document.getElementById('example')) {

    ReactDOM.render(<Provider store={store}><Welcome /></Provider>, document.getElementById('example'));
}
