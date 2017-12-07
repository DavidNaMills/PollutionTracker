import moment from 'moment';

export default (state)=>{
    const result = state.sort((a, b)=>{
        return a.date > b.date ?1:-1;
    }).map((item)=>{
        return {
            date: moment(item.date).format('DD-MM-YYYY'),
            mornPoll: item.morn.mornPoll,
            evePoll:  item.eve.evePoll,
            mornTemp: item.morn.mornTemp,
            eveTemp: item.eve.eveTemp
        }
    });
    return result;
};