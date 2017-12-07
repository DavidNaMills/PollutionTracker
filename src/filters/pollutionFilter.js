import moment from 'moment';

export default (state, {startDate, endDate})=>{
    return state.filter((pollution)=>{
        const createdAt = moment(pollution.date);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAt, 'days'):true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAt, 'days'):true;

        return startDateMatch && endDateMatch;
    }).sort((a, b)=>{
        return a.date > b.date ? 1 :-1;
    });
};