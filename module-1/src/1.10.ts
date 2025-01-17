{
    // 

    // union types 
//     type FrontendDeveloper='fakibazDeveloper'|'juniorDeveloper';
//     type FullStackDeveloper='frontendDeveloper'|'expertDeveloper';

//    type Developer=FrontendDeveloper | FullStackDeveloper



//     const newDeveloper:FrontendDeveloper= 'fakibazDeveloper'

//     type User ={
//         name:string,
//         email?:string,
//         gender:'male'|'female',
//         bloodGroup:'o+'|'a+'|'b+'
//     }
//     const user:User={
//         name:'tawhid',
//         gender:'male',
//         bloodGroup:'o+'
//     }

// intersection 
type FrontendDeveloper={
    skills:string[];
    designation1:'Frontend Developer'
}
type BackendDeveloper={
    skills:string[];
    designation2:'Backend Developer'
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper:FullStackDeveloper={
    skills:['html','css','express'],
    designation1:'Frontend Developer',
    designation2:'Backend Developer'
}




    // 
}