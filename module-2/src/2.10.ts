{
//    maped types
const arrOfNumber:number[]=[1,23,2,4];
// const arrOfStrings:string[]=['1','23','2','4']
const arrOfStrings=arrOfNumber.map(number=>number.toString())
console.log(arrOfNumber)

type AreaNumber ={
    height:number;
    width:number;
};

type Height=AreaNumber['height'] //look up type
// type AreaString={
//     height:string;
//     width:string;
// };

// T => {heigth:string; width:number}
// key =>T['width]
type AreaString <T> ={
    [key in keyof T]: T[key];
}


const area1:AreaString<{height:string;width:number}>={
    height:'100',
    width:56
}


    // 
}