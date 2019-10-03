import { Action, AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";
import { RobotState } from "../state/RobotState";

/**
 * A middleware function that is executed on every request to check if actions of
 * type `advanceAlphabeticLetter` are applied on `RobotState`s that are actually
 * turned on. Otherwise, an error is thrown.
 * @param api The Redux store.
 */
export const alphabetOnlyWhenTurnedOn: Middleware<{}, RobotState, Dispatch> = <D extends Dispatch>(api: MiddlewareAPI<D, RobotState>) =>
    (next: Dispatch<AnyAction>) => (action: any): any => {
        switch (action.type) {
            case "advanceAlphabeticLetter":
                const robot = api.getState();
                if (!robot.isOn()) {
                    throw Error("Please turn the robot on before attempting to make any alphabetic advancements.")
                }

                return next(action);
        }

        return next(action);
    };

