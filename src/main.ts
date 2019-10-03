import { createStore } from "redux"
import { counterReducer } from "./reducer/CounterReducer"
import { incrementCounter } from "./actions/CounterAction"

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer)

/**
 * The main entry point to this Redux Robot application.
 */
async function main() {
    store.subscribe(() => console.log(store.getState()))
    store.dispatch(incrementCounter)
}

main();
