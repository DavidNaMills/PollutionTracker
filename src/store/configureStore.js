import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import pollutionReducer from '../reducers/pollutionReducer';
import filterReducer from '../reducers/filterReducer';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(
        combineReducers({
            pollution: pollutionReducer,
            filter: filterReducer
        }),
        compose
    );
    return store;
}