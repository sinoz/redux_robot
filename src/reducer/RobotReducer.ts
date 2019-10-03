import { Reducer } from "redux"
import { RobotState, robotTurnedOff, robotTurnedOn } from "../state/RobotState"

/**
 * A Redux reducer that consumes a given `RobotAction` to decide on how to
 * operate on the given `RobotState`.
 */
export const robotStatusReducer: Reducer<RobotState> = (state: RobotState = robotTurnedOff, action: any) => {
    switch (action.type) {
        case "turnOn":
            return robotTurnedOn
        case "turnOff":
            return robotTurnedOff
        default:
            return state
    }
}