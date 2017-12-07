import moment from 'moment';

const defaultState = {
    startDate:moment(Date.now()).subtract(30, 'days'),
    endDate:moment(Date.now())
};

export default (state=defaultState, action)=>{
    switch(action.type){
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    };
};