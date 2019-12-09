import React, { Component } from 'react';

export default class DepartureBox extends Component {

    render() {

        let {destination_name, aimed_departure_time, platform, status, expected_departure_time, service_timetable } = this.props

        let statusColour = ""

        switch (status) {
            case "EARLY":
            status = "ON TIME"
            break;

            case "LATE":
                status = "EXP. " + expected_departure_time;
                statusColour = "late"
                break;
            case "ON TIME":
                status = status

            break;
                default:
                    status = ""
                break;
        }
 
        return (
            <div className="departure-wrapper">
            <div className="departure-info">
                <div className="name-time">
                    <div className="destination-name">{destination_name}</div>
            <div className="departure-time">
            <div className="aimed-time">{aimed_departure_time}</div><div className={"departure-status " + statusColour }>{status}</div></div>
                </div>
                <div className="departure-platform">PLATFORM {platform}</div>
            </div>
            <div className="departure-cta" onClick={(e, service_timetable) => { this.props.handleClick(e, service_timetable)}}>See more <div className="cta-arrow"></div></div>
        </div>
        )
    }
}
