{
    //static 
    class Counter{

      static  count:number=0

        // incerment(){
        //     return(Counter.count=Counter.count+1)
        // }
    static    incerment(){
            return(Counter.count=Counter.count+1)
        }
        // decrement(){
        //     return(Counter.count=Counter.count-1)
        // }
    static    decrement(){
            return(Counter.count=Counter.count-1)
        }
    }

    // const instance1=new Counter()
    // console.log(instance1.incerment())  //1--->different memory 
    // console.log(instance1.incerment())

    // const instance2=new Counter();
    // console.log(instance2.incerment())   //1 --->different memory 

    // const instance3=new Counter();
    //     console.log(instance3.incerment())
    
    console.log(Counter.incerment())
    console.log(Counter.incerment())
    console.log(Counter.incerment())
    console.log(Counter.incerment())
    

    //
}