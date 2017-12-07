import {
    averageMornTemp,
    averageEveTemp,
    averageDailyTemperature,
    highestPoll,
    averageMornPoll,
    averageEvePoll,
    stats
} from '../../dataMapping/statsMapping';
import dummyData from '../../dummy_data/dummy_pollution';

//  divide by 8



test('should calulate the average morning temperature', ()=>{
    // 4.5
    const result = averageMornTemp(dummyData);
    expect(result).toBe(5.75);
});


test('should calculate the average evening temperature', ()=>{
    // 23.375
    const result = averageEveTemp(dummyData);
    expect(result).toBe(24.375);
});

test('should calculate the average daily temperature', ()=>{
    // 16.375

    const result = averageDailyTemperature(dummyData);
    expect(result).toBe(15.125);

});



test('should find the highest pollution', ()=>{
    // 800, 2
    const result = highestPoll(dummyData);
    expect(result).toEqual({
        poll:800,
        date:2
    });  
});


test('should calculate the average morning pollution', ()=>{
    // 192.375
    const result = averageMornPoll(dummyData);
    expect(result).toBe(192.375);    
});


test('should calculate the average evening pollution', ()=>{
    // 162
    const result = averageEvePoll(dummyData);
    expect(result).toBe(159);  
});


test('should return the full stats object', ()=>{
    const object = stats(dummyData);
    expect(object).toEqual({
        aveMornTemp: 5.75,
        aveEveTemp: 24.375,
        aveDailyTemp: 15.125,
        highestPoll: {
            poll:800,
            date:2
        },
        aveMornPoll: 192.375,
        aveEvePoll: 159       
    });
});