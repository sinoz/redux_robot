import { Reducer } from "redux"
import { CounterState, initialCounterState } from "../state/CounterState"

/**
 * A counter reducer that consumes actions of type `CounterAction` and operates
 * on the given state of type `CounterState`.
 */
export const counterReducer: Reducer<CounterState> = (state: CounterState = initialCounterState, action) => {
    switch (action.type) {
        case "increment":
            return { value: state.value + 1 }
        case "decrement":
            return { value: state.value - 1 }
        default:
            return state
    }
}