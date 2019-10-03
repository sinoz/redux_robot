import { createStore } from "redux";
import { advanceAlphabeticLetter, turnRobotOff, turnRobotOn } from "./actions/RobotAction";
import { robotStatusReducer } from "./reducer/RobotReducer";
import { selectAlphabeticLetter } from "./selector/AlphabetSelector";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(robotStatusReducer);;

/**
 * The main entry point to this Redux Robot application.
 */
async function main() {
    // tslint:disable-next-line: no-console
    // store.subscribe(() => console.log(store.getState()));

    store.dispatch(turnRobotOn);
    store.dispatch(turnRobotOff);
    store.dispatch(turnRobotOn);

    store.dispatch(advanceAlphabeticLetter);
    console.log(selectAlphabeticLetter(store.getState()));
}

main();
