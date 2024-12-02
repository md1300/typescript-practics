{
    // 
    // interface , type vs interface

    
    // type alias
    // type alias is used primitive and non-primitive both type

// for object

    type User1={
        name:string;
        age:number
    }
    const user1:User1={
        name:'tawhid',
        age:123
    }
    type UserWithRole1=User1 & {role:string}
    const user3:UserWithRole1={
        name:'tawhid',
        age:123,
        role:'manager'
    }
    type RollNumber= number

// interface
// interface is used only non-primitive type

// for object
interface User2{
    name:string;
    age:number;
}


const user2:User2={
    name:'tawhid',
    age:123,
}

interface UserWithRole2 extends User2 {
    role:string
}
const user4:UserWithRole2={
    name:'tawhid',
    age:123,
    role:'manager',
}

// js ---------> object , array -->object, function -->object

// for array 

// type alias
type Roll1=number[];
const RollNumber1:Roll1=[1,2,3,4,6]

// interface ---
interface Roll2 {
    [index:number]:number
}

const RollNumber2:Roll2=[1,2,3,4,6]

// for function type script
type Add1=(num1:number, num2:number)=>number;
const add1:Add1=(num1,num2)=>num1+num2;

// for function interface

interface Add2 {
    (num1:number,num2:number) : number
}

const add2:Add2=(num1,num2)=>num1+num2
    // 
}