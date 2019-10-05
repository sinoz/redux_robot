import { TextMessage } from "../actions/RobotAction";

/**
 * A type alias for a `TextMessage` printer.
 */
export type Printer = (_: TextMessage) => void;

/**
 * A `Printer` that does nothing.
 * @param message The message to do nothing with.
 */
export const voidPrinter = (message: TextMessage): void => { }

/**
 * A `Printer` that prints the given `TextMessage` to the console.
 * @param message The message to print.
 */
export const consolePrinter = (message: TextMessage): void =>
    // tslint:disable-next-line: no-console
    console.log(message);
