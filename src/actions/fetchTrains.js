import { FETCH_TRAINS } from "./types"
import api from "../exports"

export const fetchTrains = () => dispatch => {
    console.log("fetching")
    fetch("https://transportapi.com/v3/uk/train/station/LES/live.json?app_id=" + api.id + "&app_key=" + api.key + "&darwin=false&train_status=passenger")
        .then(response => response.json())
        .then(trainTimes =>
            dispatch({
                type: FETCH_TRAINS,
                payload: trainTimes.departures.all
            })
        )
}