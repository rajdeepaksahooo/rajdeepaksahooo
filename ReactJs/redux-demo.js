const redux = require('redux');

const counterReducer = (state={counter:10},action) =>{
    if (action.type==='incriment'){
        return {
            counter: state.counter+1
        }
    }else{
        return state
    }
}

const store = redux.createStore(counterReducer);


const counterSuscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(counterSuscriber)
store.dispatch({type:'incriment'})