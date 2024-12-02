{
    // interface generic 
    interface Developer <T,X=null> {
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number;
        };
        smartWatch: T;
        bike ?: X ;

    }

    type AsusWatch ={brand:string,model:string,display:string}
    const poorDeveloper:Developer<AsusWatch>={
        name:'tawhid',
        computer:{
            brand:'MSI',
            model:'12 cdf',
            releaseYear:2024
        },
        smartWatch:{
            brand:'asus',
            model:'lasd',
            display:'OLED'
        }
    }


    interface AppleWatch {
        brand:string,
        model : string,
        heartTrack: boolean,
        sleepTrack:boolean,
    }

    interface BajajBike {
        brand:string;
        model:string;
        engineCapacity:string;
    }

    const richDeveloper:Developer<AppleWatch,BajajBike>={
        name:'khan',
        computer:{
            brand:'apple',
            model:'12 cdf',
            releaseYear:2024
        },
        smartWatch:{
            brand:'apple',
            model:'lasd',
           heartTrack:true,
           sleepTrack:true,
        },
        bike:{
            brand:'bajaj',
            model:'ct 100',
            engineCapacity:'100 cc',
        },
    }
       


    // 
}