// what stats do I want to show?

// DONE        average morning pollution
// DONE        average evening pollution
// highest morning pollution with Date within range
// lowest morning pollution with Date within range

// highest temperature with date in range
// lowest temperature with date in range
// DONE        average morning temperature
// DONE        average evening temperature
// DONE        average daily temperature in range

import '../styles/stats.css';
import '../styles/header.css';

import React from 'react';
import {connect} from 'react-redux';
import {statsMapping} from '../dataMapping/statsMapping';
import moment from 'moment';

import Header from './Header';


export class Stats extends React.Component{ 

    render(){
        const {stats} = this.props;
        console.log(this.props.stats);
        return(
            <div className={"theStats"}>
                <div className="headerContainer">
                    <Header size={4} message={'Statistics'} />
                </div>
                <div className="row">
                    <h6>average morning temperature: {stats.aveMornTemp}</h6>
                    <h6>average evening temperature: {stats.aveEveTemp}</h6>
                    <h6>average daily temperature: {stats.aveDailyTemp}</h6>
                    <h6>highest pollution: {stats.highestPoll.poll} on {moment(stats.highestPoll.date).format('DD-MM-YYYY')}</h6>
                    <h6>average morn pollution: {stats.aveMornPoll}</h6>
                    <h6>average eve pollution: {stats.aveEvePoll}</h6>
                    <h6></h6>
                </div>
            </div>
        );
    }

};

const mapStateToProps=(state)=>({
    stats: statsMapping(state.pollution)
});

export default connect(mapStateToProps)(Stats);