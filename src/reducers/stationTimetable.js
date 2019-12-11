import { FETCH_STATION_TIMETABLE } from "../actions/types"

const initialState = {
    stationInfo: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_STATION_TIMETABLE:
            return {
                ...state,
                stationInfo: action.payload
            }
        default:
            return state
    }
}