{
    // 
    //  nullable types 
    const searchName=(value:string)=>{
        if(value){
            console.log('searching')
        }
        else{
            console.log('there is nothing to search')
        }
    }
    searchName('tawhid')
// unknown typeof

const getSpeedInMeterPerSecond=(value:unknown)=>{
    if(typeof value==='number'){
      const convertedSpeed=(value*1000)/3600   
      console.log(`the speed is ${convertedSpeed} ms^-1`) 
    }
    else if (typeof value ==='string'){
    //   const valueInNumber=value.split(' ')
    //   console.log(valueInNumber)
    const [result,unit]=value.split(' ')
    // console.log(result)
    const convertedSpeed=(parseFloat(result)*1000)/3600   
    console.log(`the speed is ${convertedSpeed} ms^-1`) 
   }
   else{
    console.log('wrong input')
   }
}
getSpeedInMeterPerSecond(`1000 kmh^-1`)
// getSpeedInMeterPerSecond(1000)

// never 
const throwError=(message:string):never=>{
    throw new Error(message);
};
throwError('muskil se error hogaya')

    // 
}