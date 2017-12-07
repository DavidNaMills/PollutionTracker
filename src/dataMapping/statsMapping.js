import _ from 'lodash';

////////////////////////////////////////////////////////////////////////////
// TEMPERATURE
////////////////////////////////////////////////////////////////////////////

// average morning temperature
export const averageMornTemp=(state)=>{
    const ave = state.map((item)=>{
        return parseInt(item.morn.mornTemp);
    }).reduce((previous, current)=>{
        return parseInt(previous)+parseInt(current);
    });
    return (ave/state.length);
};

// average evening temperature
export const averageEveTemp=(state)=>{
    const ave = state.map((item)=>{
        return parseInt(item.eve.eveTemp);
    }).reduce((previous, current)=>{
        return parseInt(previous)+parseInt(current);
    });
    return (ave/state.length);
};


//average daily temperature
export const averageDailyTemperature=(state)=>{
    const ave = state.map((item)=>{
        const temp = ((item.morn.mornTemp+item.eve.eveTemp)/2);
        return temp;
    }).reduce((previous, current)=>{
        return parseInt(previous)+parseInt(current);
    });
    return (ave/state.length);
};



////////////////////////////////////////////////////////////////////////////
// POLLUTION
////////////////////////////////////////////////////////////////////////////

//highest pollution
export const highestPoll = (state)=>{
    return state.reduce((prev, current)=>{
        const temp = current.morn.mornPoll >= current.eve.evePoll
        ? {poll : current.morn.mornPoll, date : current.morn.time}
        : {poll : current.eve.evePoll, date : current.eve.time};
        
        return temp.poll > prev.poll ? temp : prev;
    }, {date:0, poll:0});
}


//average morning pollution
export const averageMornPoll=(state)=>{
    const ave = state.map((item)=>{
        return parseInt(item.morn.mornPoll);
    }).reduce((previous, current)=>{
        return parseInt(previous)+parseInt(current);
    });
    return (ave/state.length);
};


//average evening pollution
export const averageEvePoll=(state)=>{
    const ave = state.map((item)=>{
        return parseInt(item.eve.evePoll);
    }).reduce((previous, current)=>{
        return parseInt(previous)+parseInt(current);
    });
    return (ave/state.length);
};


export const statsMapping=(state)=>({
        aveMornTemp: averageMornTemp(state),
        aveEveTemp: averageEveTemp(state),
        aveDailyTemp: averageDailyTemperature(state),
        highestPoll: highestPoll(state),
        aveMornPoll: averageMornPoll(state),
        aveEvePoll: averageEvePoll(state)
});