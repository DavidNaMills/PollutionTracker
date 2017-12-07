// recharts.org

import React from 'react';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import dummyData from '../dummy_data/dummy_pollution';
import chartMapping from '../dataMapping/chartMapping';




export default class LineBarAreaComposedChart extends React.Component {
    state={
        mornTemp:true,
        eveTemp:true,
        mornPoll:true,
        evePoll:true
    };

    render(){
        return (
            <div>
                <ComposedChart width={500} height={400} data={chartMapping(dummyData)}
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    <XAxis  dataKey="date"/>
                    <YAxis />
                    <Tooltip/>
                    <Legend/>
                    <CartesianGrid stroke='#f5f5f5'/>
                    {this.state.mornPoll && <Area type='monotone' dataKey='mornPoll' fillOpacity={0.3} fill='#d074db' stroke='#d074db'/>}
                    {this.state.evePoll && <Area type='monotone' dataKey='evePoll' fillOpacity={0.3} fill='#25c650' stroke='#25c650'/>}
                    {this.state.mornTemp && <Line type='monotone' dataKey='eveTemp' stroke='#0311ad'/>}
                    {this.state.eveTemp && <Line type='monotone' dataKey='mornTemp' stroke='#9b0427'/>}
                </ComposedChart>
            </div>
        );
    }
};
