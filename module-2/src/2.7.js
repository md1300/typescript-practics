"use strict";
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'tawhid',
        age: 27,
        address: 'rng'
    };
    const car = {
        model: 'toyota 100',
        year: 200
    };
    const result1 = getPropertyValue(user, 'address');
    const result2 = getPropertyValue(car, 'model');
    //    user['age']  27
    // 
}
