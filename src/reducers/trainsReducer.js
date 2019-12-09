import { FETCH_TRAINS } from "../actions/types"

const initialState = {
    receivedTrainData: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_TRAINS":
            console.log("FETCHING THE TRAINS!")
            return {
                ...state,
                receivedTrainData: action.payload
            }
            break;

        default:
            console.log("DEFAULT")
            return state
            break;
    }
}