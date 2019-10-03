/**
 * A type of action we can apply onto a `CounterState`.
 */
export type CounterAction = {
    type: "increment"
} | {
    type: "decrement"
}

/**
 * A `CounterAction` that increments the numeric value held within `CounterState`.
 */
export let incrementCounter: CounterAction = { type: "increment" }

/**
 * A `CounterAction` that decrements the numeric value held within `CounterState`.
 */
export let decrementCounter: CounterAction = { type: "decrement" }