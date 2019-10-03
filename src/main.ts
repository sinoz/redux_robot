import { applyMiddleware, createStore } from "redux";
import { advanceAlphabeticLetter, turnRobotOff, turnRobotOn, speak } from "./actions/RobotAction";
import { activityFilter, speakingRobot } from "./middleware/RobotMiddleware";
import { robotStatusReducer } from "./reducer/RobotReducer";
import { selectAlphabeticLetter } from "./selector/AlphabetSelector";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(robotStatusReducer, applyMiddleware(activityFilter, speakingRobot));

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
    store.dispatch(speak("Hi!"));
}

main();
