{
    // 
    // type alias  

    type Student={
        name:string;
        age:number;
        gender:string;
        contactNo?:string | undefined ;
        address:string;
    }

    const student1:Student={
        name:'tawhid',
        age:50,
        gender:'male',
        contactNo:'017000000000000',
        address:'rangpur'
    }
    // const student1:{
    //     name:string;
    //     age:number;
    //     gender:string;
    //     contactNo:string;
    //     address:string;
    // }={
    //     name:'tawhid',
    //     age:50,
    //     gender:'male',
    //     contactNo:'017000000000000',
    //     address:'rangpur'
    // }

    const student2:Student={
        name:'sahin',
        age:40,
        gender:'male',
        address:'rangpur'
    }
    // const student2:{
    //     name:string;
    //     age:number;
    //     gender:string;
    //     address:string
    // }={
    //     name:'sahin',
    //     age:40,
    //     gender:'male',
    //     address:'rangpur'
    // }
    
    const student3:Student={
        name:'sahin',
        age:40,
        gender:'male',
        address:'rangpur'
    }
    // const student3:{
    //     name:string;
    //     age:number;
    //     gender:string;
    //     address:string
    // }={
    //     name:'sahin',
    //     age:40,
    //     gender:'male',
    //     address:'rangpur'
    // }

    type UserName=string;
    type IsAdmin=boolean;
const userName:UserName='tawhid';
const isAdmin:IsAdmin =true

type Add=(num1:number,num2:number)=>number
const add:Add=(num1,num2)=>num1+num2 ;

    // 
}