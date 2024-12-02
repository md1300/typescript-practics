{
    //abstraction 1.interface 2.abstract class

    // idea
    interface Vehicle1{
        // name:string;
        // model:number;
        startEngine():void;
        stopEngine():void;
        move():void;
    }
    // const vehicle1 :Vehicle1={
    //     name:'toyota',
    //     model:20000,
    // }


    //real implementation
class Car1 implements Vehicle1{
      startEngine(): void {
          console.log(' i am starting the car engine')
      }
      stopEngine(): void {
          console.log('i am stoping the car engine')
      }
      move(): void {
          console.log(' the car is moving')
      }

      test():void{
        console.log('i am just testing')
      }
}

const toyotaCar=new Car1 ()
toyotaCar.startEngine()

// abstract class

// idea 
abstract class Car2 {
 abstract   starEngine():void
 //{
    //     console.log('i am starting the car engine')
    // }
 abstract   stopEngine():void
//  {
//         console.log('i am stoping the car engine')
//     }
 abstract   move():void
    //  {
    //     console.log('i am moving  the car')
    // }
    test():void{
        console.log('i am testing')
    }
}

class ToyotaCar extends Car2{
    starEngine(): void {
        console.log('i am starting the car engine')
    }
    stopEngine(): void {
        console.log('i am stoping the car engine ')
    }
    move(): void {
        console.log('i am moving the car')
    }
}

// const hondaCar=new Car2()
// hondaCar.stopEngine()

    //
}