/**
 * A type of action we can apply onto a `RobotState`.
 */
export type RobotAction = {
    type: "turnOn",
} | {
    type: "turnOff",
} | {
    type: "advanceAlphabeticLetter",
};

/**
 * A `RobotAction` to turn the status of the robot to 'on' within the `RobotState`.
 */
export let turnRobotOn: RobotAction = { type: "turnOn" };

/**
 * A `RobotAction` to turn the status of the robot to 'off' within the `RobotState`.
 */
export let turnRobotOff: RobotAction = { type: "turnOff" };

/**
 * A `RobotAction` to advance the alphabetic letter within the `RobotState`.
 */
export let advanceAlphabeticLetter: RobotAction = { type: "advanceAlphabeticLetter" };
