{
    // promise
 type Posts={
    userId:number;
    id:number;
    title:string;
    body:string
 }

    const getTodo=async():Promise<Posts>=>{
        const response= await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data=await response.json()
        // console.log(data)
        return data
    }
    getTodo()



    const createPromise =():Promise<string>=>{
        return new Promise<string>((resolve,reject)=>{
         const data:string ='something'

         if(data){
            resolve(data)
         }
         else {
            reject('failed to load data')
         }
        })
    }
    

    // calling create promise function 
    const showData=async():Promise<string>=>{
        const data :string=await createPromise()
        // console.log(data)
        return data
    }
showData();

// ---------------------

type Something={something:string}

const createPromise2 =():Promise<Something>=>{
    return new Promise<Something>((resolve,reject)=>{
     const data:Something ={something:'something'}

     if(data){
        resolve(data)
     }
     else {
        reject('failed to load data')
     }
    })
}

const showData2=async():Promise<Something>=>{
    const data :Something=await createPromise2()
    // console.log(data)
    return data
}
showData2();


    // 
}