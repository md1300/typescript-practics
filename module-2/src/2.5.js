"use strict";
{
    //function with generic 
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray('bangladesh');
    const resGeneric = createArrayWithGeneric('bangladesh');
    const resGenericObj = createArrayWithGeneric({
        id: 123,
        name: 'mr tawhid',
    });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res10 = createArrayWithTuple('bangladesh', 2345);
    const res11 = createArrayWithTuple('bangladesh', { name: 'asia' });
    const addCourseToStudent = (student) => {
        const course = 'next level web developer';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'mr.x', email: 'x@gmail.com', devType: 'mlwd' });
    const student2 = addCourseToStudent({ name: 'mr.y', email: 'y@gmail.com', hasWatch: 'apple' });
    //
}
