import React, { Component } from 'react';
import propTypes from "prop-types"
import { connect } from "react-redux"
import { fetchTrains } from "../actions/fetchTrains"

class Main extends Component {

    componentDidMount() {
        this.props.fetchTrains()
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    render() {
        const departures = this.props.trainData.trainDepartures.receivedTrainData.map(departure => {

            const aimed_arrival_time = departure.aimed_arrival_time
            const aimed_departure_time = departure.aimed_departure_time
            const aimed_pass_time = departure.aimed_pass_time
            const category = departure.category
            const destination_name = departure.destination_name
            const mode = departure.mode
            const operator = departure.operator
            const operator_name = departure.operator_name
            const origin_name = departure.origin_name
            const platform = departure.platform
            const service = departure.service
            const service_timetable = departure.service_timetable.id
            const source = departure.source
            const train_uid = departure.train_uid

            console.log(aimed_arrival_time)
            console.log(aimed_departure_time)
            console.log(aimed_pass_time)
            console.log(category)
            console.log(destination_name)
            console.log(mode)
            console.log(operator)
            console.log(operator_name)
            console.log(origin_name)
            console.log(platform)
            console.log(service)
            console.log(service_timetable)
            console.log(source)
            console.log(train_uid)

            return (
                <div className="departure-wrapper">
                    <div className="departure-info">
                        <div className="name-time">
                            <div className="destination-name">{destination_name}</div>
                            <div className="departure-time">{aimed_departure_time}</div>
                        </div>
                        <div className="departure-platform">{platform}</div>
                    </div>
                    <div className="departure-cta">See more <div className="cta-arrow"></div></div>
                </div>
            )

        })

        return (
            <div className="main">
                {departures}
            </div>
        );
    }
}

Main.propTypes = {
    fetchTrains: propTypes.func.isRequired
}

const mapStateToProps = state => ({
    trainData: state
})

export default connect(mapStateToProps, { fetchTrains })(Main)


