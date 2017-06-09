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
// /////////// END OBJECT
// ///// Both array and object
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
// let studentName : {name:string, age: number, email:string}[]=[
//     {
//         name: 'Ammar',
//         age: 20,
//         email: 'ammarahmed4517331@gmail.com'
//     },
//     // {
//     //     name: 'Ahmed',
//     //     age: 20,
//     //     email: 'ammarahmed4517331@gmail.com'
//     // }
// ]
// let arrayss: any[] = []
// let arrays : any[] = []
// studentName.forEach(function(val){
// arrays.push(val.name,val.age,val.email);
// arrayss.push(arrays)
// arrayss=[]
// })
// console.log(arrays)
// // yarrays.push(
// //     studentName.name,
// // )
// console.log(arrays)
// // let studentDetail : {}[] = [
// //     {
// //         name : 'Ammar',
// //         age : 50
// //     },
// //     {
// //         name : ''
// //     }
// // ]
// var studentsss :{}[] = [
//     {
//         age:20
//     },
//     {
//         age:40
//     },
//     {
//         age:68
//     },
//     {
//         age:66
//     },
//     {
//         age:90        
//     }
// ];
// for (var i=0; i < studentsss.length; i++) {
// }
// console.log(studentsss)
// var a = 1;
// var b = 1;
// var c;
// if (a == b) {
//     console.log(c = "false")
// }
//  else if (a == b) {
//     console.log(c = "true")
// }
//  else {
//     console.log(c = "null")
// }
var studentsss = [
    {
        name: 'Ammar',
        age: 20
    },
    {
        name: 'Ahmed',
        age: 21
    },
    {
        name: 'some',
        age: 22
    },
    {
        name: 'else',
        age: 23
    },
    {
        name: 'true',
        age: 24
    },
    {
        name: 'window',
        age: 25
    },
    {
        name: 'linex',
        age: 26
    },
    {
        name: 'Mac',
        age: 27
    },
    {
        name: 'javascript',
        age: 28
    },
    {
        name: 'node',
        age: 29
    },
    {
        name: 'html',
        age: 30
    },
    {
        name: 'css',
        age: 31
    },
    {
        name: 'mongo',
        age: 32
    },
    {
        name: 'Mongodp',
        age: 33
    },
    {
        name: 'time',
        age: 34
    },
    {
        name: 'date',
        age: 35
    },
    {
        name: 'location',
        age: 36
    },
    {
        name: 'tuesday',
        age: 37
    },
    {
        name: 'wednesday',
        age: 38
    },
    {
        name: 'folder',
        age: 39
    },
    {
        name: 'file',
        age: 40
    },
    {
        name: 'jquery',
        age: 41
    },
    {
        name: 'typescript',
        age: 42
    },
];
studentsss.filter(function (studentAge) {
    if (studentAge.age < 21 || studentAge.age > 30) {
        return studentAge;
    }
    console.log(studentAge);
});
//# sourceMappingURL=task.js.map