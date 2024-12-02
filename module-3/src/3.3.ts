{
    //type guard 
    // typeof operator ---> type guard

type alphaNumeric=string|number;

    const add=(param1:alphaNumeric,param2:alphaNumeric):alphaNumeric=>{
        if(typeof param1==='number' && typeof param2 ==='number'){
            return param1+param2
        }
        else{
            return param1.toString() + param2.toString()
        }
    
    }

    const result1=add(2,6)
    // console.log(result1)

    //in guard 
    type NormalUser={
        name:string;
    }
    type AdminUser={
        name:string;
        role:string;
    }

    const getUser=(user:NormalUser|AdminUser)=>{
       if('role' in user){
      
        console.log(`my name is${user.name}, my role is ${user.role}`)
       } 
       else{
        console.log(`my name is ${user.name}`)
       }
    }

    const normalUser:NormalUser={
        name:'mr normal bhai'
    }

    const adminUser:AdminUser={
        name:'mr admin bhai',
        role:'admin'
    }

    getUser(normalUser)

    getUser(adminUser)
    //
}