/**
 * A type of action we can apply onto a `RobotState`.
 */
export type RobotAction = {
    type: "turnOn",
} | {
    type: "turnOff",
};

/**
 * A `RobotAction` to turn the status of the robot to 'on' within the `RobotState`.
 */
export let turnRobotOn: RobotAction = { type: "turnOn" };

/**
 * A `RobotAction` to turn the status of the robot to 'off' within the `RobotState`.
 */
export let turnRobotOff: RobotAction = { type: "turnOff" };
