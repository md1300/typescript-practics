{
    //function with generic 
     const createArray= (param:string) :string[]=>{
        return [param]
     }
     const createArrayWithGeneric=<T> (param:T) :T[]=>{
        return [param]
     }
     
     const res1=createArray('bangladesh')

     const resGeneric=createArrayWithGeneric<string>('bangladesh')

     type User ={
        id:number,
        name:string
     }

     const resGenericObj=createArrayWithGeneric<User>({
        id:123,
        name:'mr tawhid',
     })



     const createArrayWithTuple=<T,Q> (param1:T,param2:Q) :[T,Q]=>{
        return [param1,param2]
     }
     
     const res10=createArrayWithTuple<string,number>('bangladesh',2345)

     const res11=createArrayWithTuple<string,{name:string}>('bangladesh',{name:'asia'});
 
     const addCourseToStudent=<T>(student:T)=>{
        const course='next level web developer'

        return {
            ...student,
            course
        }
     }

     const student1=addCourseToStudent({name:'mr.x',email:'x@gmail.com',devType:'mlwd'});
     
     const student2=addCourseToStudent({name:'mr.y',email:'y@gmail.com',hasWatch:'apple'});

     
    //
}