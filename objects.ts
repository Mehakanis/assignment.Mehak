// objects => {} => {key: value} pair
// object array is used, if multiple students are there.
let student : {fullName:string, classId:number, rollNo:number, email:string, subjects:string[], isPassed:boolean, feeSchedule:{month:any,fee:number}} ={
    fullName: 'Mehak Anis',
    classId: 2243,
    rollNo: 1005,
    email:'abc@.gmail.com',
    subjects: ['eng','urdu','maths'],
    isPassed:true,
    feeSchedule: {
        month: 'march 2024',
        fee: 10000,
    }

}
//console.log(student);
console.log(student.fullName)
console.log(student.subjects[1])
console.log(student.isPassed)
console.log(student.feeSchedule.month + ', Amount = ' + student.feeSchedule.fee)
//[[],[],[]] array of array
// { key: 'a', key2: []}
// array ke andar koi bhi data type store ho sakti hai.
// called as nested array
// let object ={
//     key:{ bookName: 'Harry Potter',
//     author: 'J.K. Rowling', 
//         JK_Rowling : {age:26,
//         born:'london',
//     }
//     },
//     places: ['abc','xyz'],
// };
//console.log(object);
//console.log(object.places[0])

//object ke andar ham array bhi bana sakte hain.
