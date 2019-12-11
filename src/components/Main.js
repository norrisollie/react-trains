import React, { Component } from 'react';
import propTypes from "prop-types"
import { connect } from "react-redux"
import DepartureBox from './DepartureBox';
import { getStationTimetable } from '../actions/getStationTimetable';
import { getServiceTimetable } from '../actions/getServiceTimetable';

class Main extends Component {
    componentDidMount = () => {
        this.props.getStationTimetable()
    }

    render = () => {

        console.log(this.props)

        const departureBoxes = this.props.stationTimetable.stationInfo.map((departureBox, index) => {

            const service = this.props.serviceTimetable
            return <DepartureBox key={index} {...departureBox} />
        })

        return (
            <div className="main">
                <div className="station-name-wrapper">Departures from Leigh-on-Sea</div>
                <div className="departures-wrapper">
                    {departureBoxes}
                </div>
            </div>
        )
    }
}

Main.propTypes = {
    getStationTimetable: propTypes.func.isRequired
}

const mapStateToProps = state => {
    const { getStationTimetable, getServiceTimetable } = state;
    return {
        stationTimetable: getStationTimetable,
        serviceTimetable: getServiceTimetable
    };
};

export default connect(mapStateToProps, { getStationTimetable, getServiceTimetable })(Main)


