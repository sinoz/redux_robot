import { applyMiddleware, createStore } from "redux";
import { advanceAlphabeticLetter, turnRobotOff, turnRobotOn } from "./actions/RobotAction";
import { createAlphabeticLetterFilter, createSpeakingRobotMiddleware } from "./middleware/RobotMiddleware";
import { consolePrinter } from "./printer/console";
import { robotStatusReducer } from "./reducer/RobotReducer";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(
    robotStatusReducer,
    applyMiddleware(
        createAlphabeticLetterFilter(),
        createSpeakingRobotMiddleware(consolePrinter),
    ),
);

/**
 * The main entry point to this Redux Robot application.
 */
async function main() {
    // tslint:disable-next-line: no-console
    // store.subscribe(() => console.log(store.getState()));

    store.dispatch(turnRobotOn());
    store.dispatch(turnRobotOff());
    store.dispatch(turnRobotOn());

    store.dispatch(advanceAlphabeticLetter());
    store.dispatch(advanceAlphabeticLetter());
}

main();
