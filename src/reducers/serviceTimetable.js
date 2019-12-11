import { FETCH_SERVICE_TIMETABLE } from "../actions/types"

const initialState = {
    serviceInfo: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_SERVICE_TIMETABLE":
            return {
                ...state,
                serviceInfo: action.payload
            }
            break;

        default:
            return state
            break;
    }
}