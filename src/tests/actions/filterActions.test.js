import moment from 'moment';

import {setStartDate, setEndDate} from '../../actions/filterActions';

test('should set start date with defaults', ()=>{
    const action = setStartDate();
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: 0
    });
});

test('should set start date with a value', ()=>{
    const date = moment(10000);
    const action = setStartDate(date);
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: date
    });
});


test('should set END date with defaults', ()=>{
    const action = setEndDate();
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: 0
    });
});

test('should set END date with a value', ()=>{
    const date = moment(10000);
    const action = setEndDate(date);
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: date
    });
});