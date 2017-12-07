import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import {setPollution} from './actions/pollutionAction';

import MainContainer from './components/MainContainer';

// import LineBarAreaComposedChart from './components/TestChart';
import dummyData from './dummy_data/dummy_pollution';



const app = document.getElementById('app');
const store = configureStore();

store.dispatch(setPollution(dummyData));

console.log(store.getState());

const jsx = (
    <div>
        <Provider store={store}>
            <div>
                <MainContainer/>
            </div>
        </Provider>
    </div>
);

ReactDOM.render(jsx, app);