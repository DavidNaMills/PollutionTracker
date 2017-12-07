import '../styles/test.css';
import '../styles/header.css';

import React from 'react';
import Header from './Header';
import GraphContainer from './GraphContainer';
import StatsContainer from './StatsContainer';


export default class MainContainer extends React.Component{ 

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 test headerContainer">
                        <Header message={'Pollution Tracker'} size={3}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 test">
                        <GraphContainer />
                    </div>
                    <div className="col s12 m6 test">
                        <StatsContainer />
                    </div>
                </div>
            </div>
        );
    }

};