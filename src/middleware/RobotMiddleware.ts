import { Action, AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";
import { RobotAction } from "../actions/RobotAction";
import { RobotState } from "../state/RobotState";

/**
 * A middleware function that is executed on every request to check if the
 * robot is commanded to speak a certain message. When requested to do so,
 * the message is sent to the console.
 * @param api The Redux store.
 */
export const speakingRobot: Middleware<{}, RobotState, Dispatch> = <D extends Dispatch>(api: MiddlewareAPI<D, RobotState>) =>
    (next: Dispatch<AnyAction>) => (action: any): any => {
        // TODO: dispatching from here is impossible atm when the machine is to be turned off due to the ordering of the middlewares, solve!

        if (action.type === "speak") {
            console.log(action.payload);
        }

        return next(action);
    };

/**
 * A middleware function that is executed on every request to check if actions
 * oftype `advanceAlphabeticLetter` and `speak`, that are to be applied on
 * `RobotState`s, are actually valid moves. Otherwise, an error is thrown.
 * @param api The Redux store.
 */
export const activityFilter: Middleware<{}, RobotState, Dispatch> = <D extends Dispatch>(api: MiddlewareAPI<D, RobotState>) =>
    (next: Dispatch<AnyAction>) => (action: any): any => {
        switch (action.type) {
            case "speak":
            case "advanceAlphabeticLetter":
                const robot = api.getState();
                if (!robot.isOn()) {
                    throw Error("Please turn the robot on before attempting to make the robot speak or make alphabetic advancements.")
                }

                return next(action);
        }

        return next(action);
    };

