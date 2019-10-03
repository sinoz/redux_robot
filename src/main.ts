import { createStore } from "redux"
import { robotStatusReducer } from "./reducer/RobotReducer"
import { turnRobotOn, turnRobotOff } from "./actions/RobotAction"

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(robotStatusReducer)

/**
 * The main entry point to this Redux Robot application.
 */
async function main() {
    store.subscribe(() => console.log(store.getState()))
    store.dispatch(turnRobotOn)
    store.dispatch(turnRobotOff)
    store.dispatch(turnRobotOn)
}

main();
