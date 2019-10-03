import * as test from "blue-tape";
import { createStore } from "redux";
import { advanceAlphabeticLetter, turnRobotOff, turnRobotOn } from "../actions/RobotAction";
import { robotStatusReducer } from "./RobotReducer";

test("The robot should start in a 'turned-off' state", (t) => {
    const store = createStore(robotStatusReducer);

    t.equals(store.getState().status, "off");
    t.end();
});

test("The robot should be turned off after commanding it to turn itself off", (t) => {
    const store = createStore(robotStatusReducer);

    store.dispatch(turnRobotOn);
    store.dispatch(turnRobotOff);

    t.equals(store.getState().status, "off");
    t.end();
});

test("The robot should be turned on after commanding it to turn itself on", (t) => {
    const store = createStore(robotStatusReducer);

    store.dispatch(turnRobotOn);

    t.equals(store.getState().status, "on");
    t.end();
});

test("The robot should start with a letter index pointing to the letter 'A' within the ASCII table", (t) => {
    const store = createStore(robotStatusReducer);

    t.equals(store.getState().letterIndex, "A".charCodeAt(0));
    t.end();
});

test("The robot should on command, advance an alphabetic letter by one index", (t) => {
    const store = createStore(robotStatusReducer);

    store.dispatch(advanceAlphabeticLetter);

    t.equals(String.fromCharCode(store.getState().letterIndex), "B");
    t.end();
});

test("The robot should revert its ASCII letter index back to 'A' after advancing past the letter 'Z'", (t) => {
    const store = createStore(robotStatusReducer);

    for (let i = 0; i < 25; i++) {
        store.dispatch(advanceAlphabeticLetter);
    }

    t.equals(String.fromCharCode(store.getState().letterIndex), "Z");

    store.dispatch(advanceAlphabeticLetter);

    t.equals(String.fromCharCode(store.getState().letterIndex), "A");
    t.end();
});
