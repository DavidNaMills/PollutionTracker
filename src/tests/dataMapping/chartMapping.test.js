import moment from 'moment';
import chartMapping from '../../dataMapping/chartMapping';
import dummyData from '../../dummy_data/dummy_pollution';
import {result, dummy} from './helper';


test('should return a single item', ()=>{
    const item ={
        date: moment(0).add(15, 'd'),      //over
        morn:{
            time:2,
            mornPoll: 25,
            mornTemp: 4
        },
        eve: {
            time:6,
            evePoll: 5,
            eveTemp: 4 
        }
    };

    const state = chartMapping([item]);
    expect(state).toEqual([{
        date: moment(item.date).format('DD-MM-YYYY'),
        mornPoll: item.morn.mornPoll,
        evePoll:  item.eve.evePoll,
        mornTemp: item.morn.mornTemp,
        eveTemp: item.eve.eveTemp 
    }      
    ]);
});

test('should return the array sorted', ()=>{
   const state = chartMapping(dummy);
   expect(state).toEqual(result);
});