import React, { Component } from 'react';
import propTypes from "prop-types"
import { connect } from "react-redux"
import { fetchTrains } from "../actions/fetchTrains"
import DepartureBox from './DepartureBox';
import { fetchTimetable } from '../actions/fetchTimetable';

class Main extends Component {

    componentDidMount = () => {
        this.props.fetchTrains()
    }

    componentDidUpdate = (nextProps) => {
        if(nextProps) {
            console.log(nextProps)
        }
    }

    handleClick = (e, xxxx) => {
        this.props.fetchTimetable(e, xxxx)
    }

    render() {

        console.log(this.props)

        const departures = this.props.trainData.trainDepartures.receivedTrainData.map((departure, index) => {

            return <DepartureBox key={index} {...departure} handleClick={this.handleClick} />

        });

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

export default connect(mapStateToProps, { fetchTrains, fetchTimetable })(Main)


