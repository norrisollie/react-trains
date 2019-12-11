import { FETCH_SERVICE_TIMETABLE } from "./types"
import api from "../exports"

export const getServiceTimetable = (req_url) => dispatch => {

    fetch(req_url)
        .then(response => response.json())
        .then(serviceTimetable =>
            dispatch({
                type: FETCH_SERVICE_TIMETABLE,
                payload: serviceTimetable
            })
        )
}