{
    // 
    // type assertion: if i know better type than typeScript , it is called type assertion , 

    let anything: any;

    anything='next level web development ';

    anything=222;
    // (anything as string).
    // (anything as number).

    const kgToGm=(value:string| number) :string|number|undefined=>{
       if(typeof value ==='string'){
        const convertedValue=parseFloat(value)*1000
        // return convertedValue
        return `the converted value is : ${convertedValue} `
       }
       if(typeof value==='number'){
        return value*1000
       }
    }
    const result1=kgToGm(1000) as number
    const result2=kgToGm('1000') as string

    type CustomeError={
        message:string
    }

    try{

    }
    catch(error){
        console.log((error as CustomeError).message)
    }

    // 
}