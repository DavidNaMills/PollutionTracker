import moment from 'moment';

export const setStartDate = (startDate = 0)=>({
    type:'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate = 0)=>({
    type: 'SET_END_DATE',
    endDate
});