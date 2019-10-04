import { Dispatch, Middleware } from "redux";
import { RobotState } from "../state/RobotState";

/**
 * A middleware function that is executed on every request to check if the
 * robot is commanded to speak a certain message. When requested to do so,
 * the message is sent to the console.
 * @param api The Redux store.
 */
export function createSpeakingRobotMiddleware(): Middleware<{}, RobotState, Dispatch> {
    return (api) => (next) => (action) => {
        // TODO: dispatching from here is impossible atm when the machine
        // is to be turned off due to the ordering of the middlewares, solve!

        if (action.type === "speak") {
            // tslint:disable-next-line: no-console
            console.log(action.payload);
        }

        return next(action);
    };
}

/**
 * A middleware function that is executed on every request to check if actions
 * oftype `advanceAlphabeticLetter` and `speak`, that are to be applied on
 * `RobotState`s, are actually valid moves. Otherwise, an error is thrown.
 * @param api The Redux store.
 */
export function createActivityFilter(): Middleware<{}, RobotState, Dispatch> {
    return (api) => (next) => (action) => {
        switch (action.type) {
            case "speak":
            case "advanceAlphabeticLetter":
                const robot = api.getState();
                if (!robot.isOn()) {
                    throw Error(
                        `Please turn the robot on before attempting to make ` +
                        `the robot speak or make alphabetic advancements.`,
                    );
                }

                return next(action);
        }

        return next(action);
    };
}
