{
    // utility type 
    //pick utility

type Person={
    name:string;
    age:number;
    email?:string;
    contactNo:string;
}

type Name= Pick<Person,'name'>
type NameAge=Pick<Person,'name'|'age'>

// Omit 
type ContactInfo=Omit<Person, 'name'|'age'>

//Required
type PersonRequired=Required<Person>

// Pertial
type PersonPartial=Partial<Person>

//Readonly
type PersonReadonly=Readonly<Person>

const person1:PersonReadonly={
 name:'mir',
 age:25,
 contactNo:'0358375',
}

// person1.name='mr mir';

//Record type
// type MyObj={
//     a:string,
//     b:string,
// }

type MyObj= Record<string,string>

const emptyObj:Record<string,unknown>={}

emptyObj.name='string'

const obj1:MyObj={
    a:'aa',
    b:'bb',
    c:'cc',
    d:'dd',
    
}
   

// 
}