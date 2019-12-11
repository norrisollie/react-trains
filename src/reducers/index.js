import { combineReducers } from "redux"
import getServiceTimetable from "./serviceTimetable"
import getStationTimetable from "./stationTimetable"

export default combineReducers({
    getServiceTimetable,
    getStationTimetable
})