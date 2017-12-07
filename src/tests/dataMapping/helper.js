import moment from 'moment';

export const result = [
    {
        date: moment(0).format('DD-MM-YYYY'),
        mornPoll: 235,
        evePoll: 45,
        mornTemp: 2,
        eveTemp: 3 
    },
    {
        date: moment(0).add(5, 'd').format('DD-MM-YYYY'),       //under
        mornPoll: 999,
        evePoll: 4,
        mornTemp: 5,
        eveTemp: 89
    },
    {
        date: moment(0).add(15, 'd').format('DD-MM-YYYY'),      //over
        mornPoll: 25,
        evePoll: 5,
        mornTemp: 4,
        eveTemp: 4 
    }
];

export const dummy = [
    {
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
    },
    {
        date: moment(0),
        morn:{
            time:2,
            mornPoll: 235,
            mornTemp: 2
        },
        eve: {
            time:6,
            evePoll: 45,
            eveTemp: 3 
        }
    },
    {
        date: moment(0).add(5, 'd'),       //under
        morn:{
            time:2,
            mornPoll: 999,
            mornTemp: 5
        },
        eve: {
            time:6,
            evePoll: 4,
            eveTemp: 89 
        }
    }
];