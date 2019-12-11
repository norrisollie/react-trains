import { FETCH_STATION_TIMETABLE } from "./types"
import api from "../exports"

export const getStationTimetable = () => dispatch => {
    console.log("fetching")
    fetch("https://transportapi.com/v3/uk/train/station/LES/live.json?app_id=" + api.id + "&app_key=" + api.key + "&darwin=false&train_status=passenger")
        .then(response => response.json())
        .then(stationTimetable =>
            dispatch({
                type: FETCH_STATION_TIMETABLE,
                payload: stationTimetable.departures.all
            })
        )
}