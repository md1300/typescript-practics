{
    //polymorphisum

    class Person {
        getSleep(){
            console.log('i am sleeping for 8 hours per day')
        }
    }

    class Student extends Person {
        getSleep() {
            console.log('i am sleeping for 7 hours per day')
        }
    }
    class Developer extends Person{
        getSleep(){
            console.log('i am sleeping for 6 hours per day')
        }
    }
    const getSleepingPerHours=(param:Person)=>{
        param.getSleep()
    }

    const person1=new Person()
    const person2=new Student()
    const person3=new Developer()

    getSleepingPerHours(person1)
    getSleepingPerHours(person2)
    getSleepingPerHours(person3)

    // class ar any particuler method jodi different different clase a  use hoye redesign hoy tahole amer different differnt output dey , atai polymorphisum;

    class Shape{
        getArea():number{
            return 0
        }
    }
//pi * r * r
    class Circle extends Shape{
  radius:number;
  constructor(radius:number){
    super();
    this.radius=radius
  }

        getArea(): number {
           return Math.PI * this.radius * this.radius
        }
    }

    // height and weight 

    class Ractangle extends Shape{
        height:number;
        weight:number;
        constructor(height:number,weight:number){
            super()
            this.height=height;
            this.weight=weight;
        }

        getArea(): number {
            return this.height*this.weight
        }
    }


    const getShapeArea=(param:Shape)=>{
        console.log(param.getArea())
    }

    const shape1=new Shape()
    const shape2=new Circle(6)
    const shape3=new Ractangle(3,7)

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)

    //
}