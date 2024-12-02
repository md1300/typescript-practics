{
    // oop --- inheritence
    
    class Person{
        name:string;
        age:number;
        address:string;

        constructor(name:string,age:number,address:string){
            this.name=name;
            this.age=age;
            this.address=address;
        }
        getSleep(numberOfHours:number){

            console.log(`${this.name} will sleep for ${numberOfHours}`)
        }
    }

    
    class Student extends Person{
        

        constructor(name:string,age:number,address:string){
         super(name,age,address)
        }
        getSleep(numberOfHours:number){

            console.log(`${this.name} will sleep for ${numberOfHours}`)
        }
    }

    const student1=new Student('mr student',20,'uganda')
    // student1. 

    class Teacher extends Person{
        
        designation:string

        constructor(name:string,age:number,address:string,designation:string){
            super(name,age,address)
            this.designation=designation
        }
      

        takeClass(numberOfClass:number){
            console.log(`${this.name} will take ${numberOfClass}`);
        }
    }

    const teacher=new Teacher('mr.teacher',40,'uganda','professor')
    // teacher.

    //
}