import { FETCH_TRAINS } from "./types"

export const fetchTrains = () => dispatch => {
    console.log("fetching")
    fetch("https://transportapi.com/v3/uk/train/station/LES///timetable.json?app_id=312ac8d5&app_key=d9c2cbc5a2e718ed0090aea8c9c70b7e&destination=FST&train_status=passenger")
        .then(response => response.json())
        .then(trainTimes =>
            dispatch({
                type: FETCH_TRAINS,
                payload: trainTimes.departures.all
            })
        )
}