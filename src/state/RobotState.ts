/**
 * The status of the robot, which is either on or off.
 */
type RobotStatus = {
    status: "on",
} | {
    status: "off",
};

/**
 * A trait of a robot that knows the alphabet.
 */
interface IKnowsAlphabet {
    letterIndex: number;
}

/**
 * The initial letter the Robot starts with in the alphabet.
 */
const initialLetterIndex = "A".charCodeAt(0);

/**
 * The operations to be able to apply on Redux Robot instances.
 */
interface IRobotOps {
    isOn(): boolean;
    advanceLetterIndexTo(newIndex: number): RobotState;
}

/**
 * The state of the Redux Robot.
 */
export type RobotState = RobotStatus
    & IKnowsAlphabet
    & IRobotOps;

/**
 * The operations of the `RobotState`.
 */
const robotOps: IRobotOps = {
    isOn(this: RobotState): boolean {
        return isOn(this);
    },

    advanceLetterIndexTo(this: RobotState, newIndex: number): RobotState {
        return advanceLetterIndexTo(this, newIndex);
    },
};

/**
 * A `RobotState` where its `status` is set to `off`.
 */
export let robotTurnedOff: RobotState = {
    letterIndex: initialLetterIndex,
    status: "off",

    ...robotOps,
};

/**
 * A `RobotState` where its `status` is set to `on`.
 */
export let robotTurnedOn: RobotState = {
    letterIndex: initialLetterIndex,
    status: "on",

    ...robotOps,
};

/**
 * Advances the current alphabetic index letter to the specified index. Returns a new
 * version of a `RobotState` with the updated index.
 * @param state The state to copy.
 * @param newIndex The new index to apply to the new copied version of the `RobotState`.
 */
const advanceLetterIndexTo = (state: RobotState, newIndex: number): RobotState =>
    ({ ...state, letterIndex: newIndex });

/**
 * A function that returns whether the `status` within the given
 * `RobotState` is set to `on`.
 * @param state The `RobotState` to inspect.
 */
const isOn = (state: RobotState): boolean =>
    status === "on";
