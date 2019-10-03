import { createStore, Reducer } from 'redux'

/**
 * The counter that holds a numeric counting value.
 */
type CounterState = {
    value: number
}

/**
 * A type of action we can apply onto a `CounterState`.
 */
type CounterAction = {
    type: "increment"
} | {
    type: "decrement"
}

/**
 * A `CounterAction` that increments the numeric value held within `CounterState`.
 */
let incrementCounter: CounterAction = { type: "increment" }

/**
 * A `CounterAction` that decrements the numeric value held within `CounterState`.
 */
let decrementCounter: CounterAction = { type: "decrement" }

/**
 * The initial state of the `CounterState`.
 */
let initialCounterState = { value: 0 }

/**
 * A counter reducer that consumes actions of type `CounterAction` and operates
 * on the given state of type `CounterState`.
 */
const counterReducer: Reducer<CounterState> = (state: CounterState = initialCounterState, action) => {
    switch (action.type) {
        case "increment":
            return { value: state.value + 1 }
        case "decrement":
            return { value: state.value - 1 }
        default:
            return state
    }
}

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
