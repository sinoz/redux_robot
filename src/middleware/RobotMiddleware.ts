import { Dispatch, Middleware } from "redux";
import { Printer } from "../printer/console";
import { selectAlphabeticLetter } from "../selector/AlphabetSelector";
import { RobotState } from "../state/RobotState";

/**
 * The message to speak when a robot is being turned off.
 */
const turnOffMessage = "The Robot has been turned off!";

/**
 * The message to speak when a robot is being turned on.
 */
const turnOnMessage = "The Robot has been turned on!";

/**
 * A middleware function that is executed on every request to check if the
 * robot is commanded to speak a certain message. When requested to do so,
 * the message is sent to the console.
 * @param print The printer function that prints `TextMessage`s.
 * @param api The Redux store.
 */
export function createSpeakingRobotMiddleware(print: Printer): Middleware<{}, RobotState, Dispatch> {
    return (api) => (next) => (action) => {
        // in case the robot is in a turned off state and an attempt was
        // made to make the robot speak, we fail-fast the procedure
        const robot = api.getState();
        if (!robot.isOn() && action.type === "speak") {
            throw Error(
                `Please turn the robot on before attempting to make ` +
                `the robot speak.`,
            );
        }

        // update the state and obtain it
        const result = next(action);
        const updatedState = api.getState();

        // and then perform a side effect
        switch (action.type) {
            case "turnOn":
                print(turnOnMessage);
                break;

            case "turnOff":
                print(turnOffMessage);
                break;

            case "speak":
                print(action.payload);
                break;

            case "advanceAlphabeticLetter":
                print(
                    `Robot has advanced to the letter ` +
                    selectAlphabeticLetter(updatedState),
                );

                break;
        }

        // and save our updated state!
        return result;
    };
}

/**
 * A middleware function that is executed on every request to check if actions
 * of type `advanceAlphabeticLetter`, that are to be applied on `RobotState`s,
 * are actually valid moves. Otherwise, an error is thrown.
 * @param api The Redux store.
 */
export function createAlphabeticLetterFilter(): Middleware<{}, RobotState, Dispatch> {
    return (api) => (next) => (action) => {
        // make sure that the robot is actually turned on if attempted
        // to advance in the alphabetic sequence
        switch (action.type) {
            case "advanceAlphabeticLetter":
                const robot = api.getState();
                if (!robot.isOn()) {
                    throw Error(
                        `Please turn the robot on before attempting to make ` +
                        `the robot make alphabetic advancements.`,
                    );
                }

                break;
        }

        // and apply update and save state
        return next(action);
    };
}
