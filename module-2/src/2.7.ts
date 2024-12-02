{
    // generic constrain with keyof operator

    type Vehicle={
        bike:string;
        car:string;
        ship:string;
    }

    type Owner='bike'|'car'|'ship'; //manually

    type Owner2 = keyof Vehicle

    const getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y)=>{
        return obj[key]
    }

   const user ={
    name:'tawhid',
    age:27,
    address:'rng'
   }
   const car={
    model:'toyota 100',
    year:200 
   }

   const result1=getPropertyValue(user,'address')
   const result2=getPropertyValue(car,'model')
//    user['age']  27

    // 
}