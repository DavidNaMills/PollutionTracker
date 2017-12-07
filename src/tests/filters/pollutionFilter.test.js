import moment from 'moment';
import pollutionFilter from '../../filters/pollutionFilter';
import dummyData from '../../dummy_data/dummy_pollution';

//create filters action/reducer

test('should return all items sorted', ()=>{
    const dummyData2 = dummyData.sort((a, b)=>{
        return a.date > b.date ? 1 :-1;
    });

    const filter = {
        startDate: moment(0),
        endDate: moment(Date.now())
    };
    const res = pollutionFilter(dummyData2, filter);
    expect(res).toEqual(dummyData2);
});


test('should return all items between 1 and 10', ()=>{
    const filter = {
        startDate: moment(0),
        endDate: moment(0).add(10, 'd')
    };
    const res = pollutionFilter(dummyData, filter);
    expect(res).toEqual([dummyData[0], dummyData[1], dummyData[2]]);    
});


test('should only return items between 11 and 20', ()=>{
    const filter = {
        startDate : moment(0).add(12, 'd'),
        endDate : moment(0).add(20, 'd')
    };
    const state = pollutionFilter(dummyData, filter);
    expect(state).toEqual([dummyData[4], dummyData[5]]);
});


test('should not return any data', ()=>{
    const filter = {
        startDate:moment(Date.now()),
        endDate:moment(Date.now()).subtract(20,'d')
    };
    const state = pollutionFilter(dummyData, filter);
    expect(state).toEqual([]);
});