{
    // 
    // generic type 

    // type GenericArray<param>=Array<param>
    type GenericArray<T>=Array<T> //industry standard

    // const rollNumber :number[]=[1,2,5,3,4,5]
    // const rollNumber :Array<number>=[1,2,5,3,4,5]
    const rollNumber :GenericArray<number>=[1,2,5,3,4,5]
    

    // const mentors:string[]=['mr','x','y','z']
    // const mentors:Array<string>=['mr','x','y','z']
    const mentors:GenericArray<string>=['mr','x','y','z']
    
    // const boolArray:boolean[]=[true,false,true,false]
    // const boolArray:Array<boolean>=[true,false,true,false]
    const boolArray:GenericArray<boolean>=[true,false,true,false]

   const user:GenericArray<{name:string, age:number}> =[
    {
        name:'tawhid',
        age:27,
    },
    {
        name:'khan',
        age:27,
    },
    
   ]
//    generic tuple 
  
   type GeneriTuple<X,Y>=[X,Y]

//   const manush:[string, string]=['mr. x','mr. y']
  const manush:GeneriTuple<string,string>=['mr. x','mr. y']

  const userWithId:GeneriTuple<number,{name:string,email:string}> =[1234,{name:'tawhid', email:'a@gmail.com'}]

    // 
}