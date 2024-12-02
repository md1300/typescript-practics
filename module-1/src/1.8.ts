{
    //  destructuring

    // distructuring in object

    const user={
        id:345,
        name:{
            firstName:'tawhid',
            middleName:'khan',
            lastName:'sorker',
        },
        contactNo:'0170000000',
        address:'bangladesh',       
    };

    const {contactNo:phoneNo,name:{middleName:midName}}=user ;

    // array destructuring
    const myFriends=['chandler','joey','ross','rachel','monica','phoebe']
    // const [a,b,bestFriend,]=myFriends;
    // const [,,bestFriend,]=myFriends;
    const [,,bestFriend,...rest]=myFriends;
}

