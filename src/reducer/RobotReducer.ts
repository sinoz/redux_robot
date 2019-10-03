import { Reducer } from "redux";
import { RobotState, robotTurnedOff, robotTurnedOn } from "../state/RobotState";

/**
 * The start and end of the alphabet on the ASCII table.
 */
export const ASCII_ALPHABET_START = 65;
export const ASCII_ALPHABET_END = 90;

/**
 * A Redux reducer that consumes a given `RobotAction` to decide on how to
 * operate on the given `RobotState`.
 */
export const robotStatusReducer: Reducer<RobotState> = (state: RobotState = robotTurnedOff, action: any) => {
    switch (action.type) {
        case "turnOn":
            return robotTurnedOn;

        case "turnOff":
            return robotTurnedOff;

        case "advanceAlphabeticLetter":
            return state.advanceLetterIndexTo(getNextASCIIAlphabeticIndex(state.letterIndex));

        default:
            return state;
    }
};

/**
 * Returns the next alphabetic letter index on the ASCII table.
 * @param index The letter index within the ASCII table.
 */
const getNextASCIIAlphabeticIndex = (index: number): number =>
    index >= ASCII_ALPHABET_END ? ASCII_ALPHABET_START : index + 1;
