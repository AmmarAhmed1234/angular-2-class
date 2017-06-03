// let a : string = "hello"
// let testArr : string|number = 444; ////// union tupple
// const days: string[] = [
//     'Monday',
//     'Tuesday',
//     'Wednesday'
//     ]
// function add(p1:number = 0, p2? : number) : void{
//     p1 * p2
// }
// ////////// object is a a pairs of keys and value
//                     //
// /////// and we get object value by . notation
// let obj = {name: 'Ammar', id:2}
// //// if we want to get value in variable by [....] and obj.name
// console.log('obj',obj)
///////////// END OBJECT
/////// Both array and object
// let student : {name:string, age: number, email:string}[]=[
//     {
//         name: 'Ammar',
//         age: 20,
//         email: 'ammarahmed4517331@gmail.com'
//     },
//     {
//         name: 'Ahmed',
//         age: 20,
//         email: 'ammarahmed4517331@gmail.com'
//     }
// ]
// student.push(
//     {
//         name: 'Ahmed',
//         age: 28,
//         email: 'ammarahmed4517331@gmail.com'
//     }
// )
// console.log('student :', student)
// //////////// END
// //////// Loops
// // days.forEach(function(value, index, arr ){
// //     console.log('val' , value, index)
// // })
// // console.log(testArr)
// //// ... this is called spread syntex 
// let modifiedStudent = student.map(function(student){
//     let fullName = `${student.name} ${student.age}`
//     let s = {fullName, ...student};
//     delete student.name;
//     delete student.age;
//     return s
// })
// console.log('modifiedStudent :', modifiedStudent);
// console.log(a)
// console.log(a.length)
// console.log(add(5, 5))
// console.log('day'+ ":" + days[1] )
var studentName = [
    {
        name: 'Ammar',
        age: 20,
        email: 'ammarahmed4517331@gmail.com'
    },
    {
        name: 'Ahmed',
        age: 20,
        email: 'ammarahmed4517331@gmail.com'
    }
];
var arrays = [
    'studentName.name',
    'studentName.email'
];
console.log(arrays);
//# sourceMappingURL=task.js.map