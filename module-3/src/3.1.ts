{
    //oop ---class

    class Animal {
    //    public name:string;
    //    public species:string;
    //    public  sound:string;
// parameter properties
        constructor(public name:string,public species:string,public sound:string,){

        // this.name=name;
        //  this.sound=sound;
        //  this.species=species;
    }
 
    makeSound(){
        console.log(`the ${this.name} says ${this.sound} `)
    }

    }

    const dog = new Animal('german shepard bhai','dog','ghew ghew')
    const cat =new Animal('persian bhai','cat','meaw meaw')
    cat.makeSound();
    
   
    


    //
}