import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimetableBox from "./TimetableBox";
import { getServiceTimetable } from '../actions/getServiceTimetable';


function DepartureBox(props) {

    // let { destination_name, aimed_departure_time, platform, status, expected_departure_time, service_timetable } = this.props

    let statusColour = ""
    // service_timetable = service_timetable.id

    // switch (props.status) {
    //     case "EARLY":
    //         props.status = "ON TIME"
    //         break;

    //     case "LATE":
    //         props.status = "EXP. " + props.expected_departure_time;
    //         statusColour = "late"
    //         break;
    //     case "ON TIME":
    //         props.status = "ON TIME"

    //         break;
    //     default:
    //         props.status = ""
    //         break;
    // }


    const handleClick = (e) => {
        props.getServiceTimetable(props.service_timetable.id)
    }

    return (
        <div className="departure-wrapper">
            <div className="departure-info">
                <div className="name-time">
                    <div className="destination-name">{props.destination_name}</div>
                    <div className="departure-time">
                        <div className="aimed-time">{props.aimed_departure_time}</div><div className={"departure-status " + statusColour}>{props.status}</div></div>
                </div>
                <div className="departure-platform">PLATFORM {props.platform}</div>
            </div>
            <div className="departure-cta" onClick={handleClick}>See more <div className="cta-arrow"></div></div>
            <TimetableBox {...serviceTimetable}/>
        </div>
    )
}

const mapStateToProps = state => {
    const { getStationTimetable, getServiceTimetable } = state;
    return {
        stationTimetable: getStationTimetable,
        serviceTimetable: getServiceTimetable
    };
};

export default connect(mapStateToProps, { getServiceTimetable })(DepartureBox)
