{
    //  constrain type

    
    const addCourseToStudent=<T extends {id:number;name:string;email:string}>(student:T)=>{
        const course='next level web developer'

        return {
            ...student,
            course
        }
     }
     const student3 =addCourseToStudent({id:123,name:'mr.z',email:'z@gmail.com',emil:'emil'})

     const student1=addCourseToStudent< {
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({id:1234 ,name:'mr.x',email:'x@gmail.com',devType:'mlwd'});
     
     const student2=addCourseToStudent({id: 1234,name:'mr.y',email:'y@gmail.com',hasWatch:'apple'});
    // 
}