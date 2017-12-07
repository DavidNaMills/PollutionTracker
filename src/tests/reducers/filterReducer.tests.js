import moment from 'moment';
import filterReducer from '../../reducers/filterReducer';

test('should test the reducer on init', ()=>{
    const state = filterReducer(undefined, {type:'@@INIT'});

    console.log(state.startDate);
    console.log(state.endDate);

    expect(state).toEqual({
        startDate:moment(Date.now()).subtract(30, 'd'),
        endDate:moment(Date.now())
    });
});


test('should set the start date', ()=>{
    const now = moment();
    const action={
        type:'SET_START_DATE',
        startDate: now
    };
    const state = filterReducer(undefined, action);
    expect(state).toEqual({
        startDate:now,
        endDate:moment()
    });
});


test('should set the end date', ()=>{
    const now = moment(345);
    const action={
        type:'SET_END_DATE',
        endDate: now
    };
    const state = filterReducer(undefined, action);
    expect(state).toEqual({
        startDate:moment().subtract(30, 'days'),
        endDate:now
    });
});