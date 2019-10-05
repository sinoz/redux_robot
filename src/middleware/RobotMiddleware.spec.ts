import * as test from "blue-tape";
import { applyMiddleware, createStore } from "redux";
import { advanceAlphabeticLetter, speak, TextMessage, turnRobotOff, turnRobotOn } from "../actions/RobotAction";
import { voidPrinter } from "../printer/console";
import { robotStatusReducer } from "../reducer/RobotReducer";
import { createAlphabeticLetterFilter, createSpeakingRobotMiddleware } from "./RobotMiddleware";

test(
    `The middleware should throw an error when attempting to make ` +
    `alphabetic advancements when the robot is still turned off`,
    async (t) => {
        const store = createStore(
            robotStatusReducer,
            applyMiddleware(createAlphabeticLetterFilter()),
        );

        t.throws(() => store.dispatch(advanceAlphabeticLetter()));
    });

test(
    `The middleware should have the robot speak a welcome message ` +
    `when being turned on`,
    async (t) => {
        let x = 0;

        const xUpdater = (_: TextMessage): void => {
            x = 1;
        };

        const store = createStore(
            robotStatusReducer,
            applyMiddleware(createSpeakingRobotMiddleware(xUpdater)),
        );

        store.dispatch(turnRobotOn());
        t.equals(x, 1);
    });

test(
    `The middleware should have the robot speak a termination message ` +
    `when being turned off`,
    async (t) => {
        let x = 0;

        const xUpdater = (_: TextMessage): void => {
            x++;
        };

        const store = createStore(
            robotStatusReducer,
            applyMiddleware(createSpeakingRobotMiddleware(xUpdater)),
        );

        store.dispatch(turnRobotOn());
        store.dispatch(turnRobotOff());

        t.equals(x, 2);
    });

test(
    `The middleware should throw an error when attempting to make ` +
    `the robot speak when the robot is still turned off`,
    async (t) => {
        const store = createStore(
            robotStatusReducer,
            applyMiddleware(createSpeakingRobotMiddleware(voidPrinter)),
        );

        t.throws(() => store.dispatch(speak("Hi")));
    });
