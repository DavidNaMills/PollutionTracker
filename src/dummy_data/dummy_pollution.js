import moment from 'moment';

export default [
    {
        date: moment(0).add(15, 'd'),      //over
        morn:{
            time:2,
            mornPoll: 99,
            mornTemp: 4
        },
        eve: {
            time:6,
            evePoll: 999,
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
            mornPoll: 99,
            mornTemp: 5
        },
        eve: {
            time:6,
            evePoll: 4,
            eveTemp: 89 
        }
    },
    {
        date: moment(0).add(8, 'd'),
        morn:{
            time:2,
            mornPoll: 2,
            mornTemp: 12
        },
        eve: {
            time:6,
            eveTemp: 32,
            evePoll: 8
        }
    },
    {
        date: moment(0).add(19, 'd'),
        morn:{
            time:2,
            mornPoll: 244,
            mornTemp: 23
        },
        eve: {
            time:6,
            evePoll: 425,
            eveTemp: 1 
        }
    },
    {
        date:moment(0).add(11, 'd'),
        morn:{
            time:2,
            mornPoll: 57,
            mornTemp: 7,
        },
        eve: {
            time:6,
            eveTemp: 77,
            evePoll: 777
        }
    },
    {
        date:moment(0).add(25, 'd'),
        morn:{
            time:2,
            mornPoll: 77,
            mornTemp: -7
        },
        eve: {
            time:6,
            eveTemp: -2,
            evePoll: 7
        }
    }
    ,
    {
        date:moment(0).add(22, 'd'),
        morn:{
            time:2,
            mornTemp: 0,
            mornPoll: 800,
        },
        eve: {
            time:6,
            eveTemp: -9,
            evePoll: 1
        }
    }
];