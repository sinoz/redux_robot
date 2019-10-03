import { RobotState } from "../state/RobotState";

/**
 * A Redux selector that consumes the given `RobotState`, inspects its
 * current alphabetic letter index and translates it to its corresponding
 * character from the ASCII table.
 * @param state The `RobotState` to inspect.
 */
export let selectAlphabeticLetter = (state: RobotState): string =>
    String.fromCharCode(state.letterIndex);
