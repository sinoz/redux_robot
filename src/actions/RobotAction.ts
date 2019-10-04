/**
 * A command to turn the robot on.
 */
interface ITurnOnAction {
    type: "turnOn";
}

/**
 * A command to turn the robot off.
 */
interface ITurnOffAction {
    type: "turnOff";
}

/**
 * A command to have the robot advance to the next
 * letter within the alphabet.
 */
interface IAdvanceAlphabeticLetter {
    type: "advanceAlphabeticLetter";
}

/**
 * An alias for a `string` to represent the text message of the robot.
 */
export type TextMessage = string;

/**
 * A command to speak a message.
 */
interface ISpeak {
    type: "speak";
    payload: TextMessage;
}

/**
 * A type of action we can apply onto a `RobotState`.
 */
export type RobotAction = ITurnOnAction
    | ITurnOffAction
    | IAdvanceAlphabeticLetter
    | ISpeak;

/**
 * A `RobotAction` to turn the status of the robot to 'on' within the `RobotState`.
 */
export let turnRobotOn = (): RobotAction => ({ type: "turnOn" });

/**
 * A `RobotAction` to turn the status of the robot to 'off' within the `RobotState`.
 */
export let turnRobotOff = (): RobotAction => ({ type: "turnOff" });

/**
 * A `RobotAction` to advance the alphabetic letter within the `RobotState`.
 */
export let advanceAlphabeticLetter = (): RobotAction => ({ type: "advanceAlphabeticLetter" });

/**
 * A `RobotAction` to have the robot speak the given `TextMessage`.
 * @param payload The text message.
 */
export let speak = (payload: TextMessage): RobotAction => {
    return {
        payload,
        type: "speak",
    };
};
