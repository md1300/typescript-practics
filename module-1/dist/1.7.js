"use strict";
{
    // spread operator
    // rest operator
    // destructuring 
    // learn spread operators
    const bros1 = ['mir', 'mizan', 'firoj'];
    const bros2 = ['tonmoy', 'nahid', 'rahat'];
    bros1.push(...bros2);
    const mantors1 = {
        typescript: 'mezba',
        redux: 'mir',
        dbms: 'mizan'
    };
    const mantors2 = {
        prisma: 'firoz',
        next: 'tonmoy',
        cloud: 'nahid'
    };
    const mantorsList = Object.assign(Object.assign({}, mantors1), mantors2);
    // learn rest opeartor 
    const greetFriends = (friend1, friend2, friend3) => {
        console.log(`hi ${friend1} ${friend2} ${friend3} `);
    };
    greetFriends('abul', 'kabul', 'babul');
    // rest is used for making  an array from some string  
    const greetForFriends = (...friends) => {
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    greetForFriends('abul', 'kabul', 'babul');
}
