import { FETCH_TIMETABLE } from "./types"
import api from "../exports"

export const fetchTimetable = (e) => dispatch => {
    fetch("")
        .then(response => response.json())
        .then(trainTimes =>
            dispatch({
                type: FETCH_TIMETABLE,
                payload: trainTimes.departures.all
            })
        )
}