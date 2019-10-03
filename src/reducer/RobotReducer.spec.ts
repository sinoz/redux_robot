import * as test from "blue-tape";
import { createStore } from "redux";
import { turnRobotOff, turnRobotOn } from "../actions/RobotAction";
import { robotStatusReducer } from "./RobotReducer";

const store = createStore(robotStatusReducer);

test("The robot should start in a 'turned-off' state", (t) => {
    t.equals(store.getState().status, "off");
    t.end();
});

test("The robot should be turned off after commanding it to turn itself off", (t) => {
    store.dispatch(turnRobotOn);
    store.dispatch(turnRobotOff);

    t.equals(store.getState().status, "off");
    t.end();
});

test("The robot should be turned on after commanding it to turn itself on", (t) => {
    store.dispatch(turnRobotOn);

    t.equals(store.getState().status, "on");
    t.end();
});
