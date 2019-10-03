/**
 * The state of the Redux Robot.
 */
export type RobotState = ({
    status: "on",
} | {
    status: "off",
}) & {
    isOn(): boolean,
};

/**
 * The operations of the `RobotState`.
 */
const robotOps = {
    isOn(this: RobotState): boolean {
        return isOn(this);
    },
};

/**
 * A `RobotState` where its `status` is set to `off`.
 */
export let robotTurnedOff: RobotState = {
    status: "off",
    ...robotOps,
};

/**
 * A `RobotState` where its `status` is set to `on`.
 */
export let robotTurnedOn: RobotState = {
    status: "on",
    ...robotOps,
};

/**
 * A function that returns whether the `status` within the given
 * `RobotState` is set to `on`.
 * @param state The `RobotState` to inspect.
 */
const isOn = (state: RobotState): boolean =>
    status === "on";
