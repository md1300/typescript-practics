{
    //  conditional type
    type a1=number;
    type b1=string ;
    type x=a1 extends null ? true : false; //conditional type 

    type Y = a1 extends null? true: b1 extends undefined? undefined: any ;
    

    type Sheikh={
        bike:string;
        car:string;
        ship:string;
    }
// car aase kina /bike ase kina/ship ase kina/ tractor ase kina
    // type CheckVehicle<T>=T extends 'bike'|'car'|'ship' ? true : false ;
    type CheckVehicle<T>=T extends keyof Sheikh ? true : false ;

type hasBike=CheckVehicle<'tractor'>

    // 
}