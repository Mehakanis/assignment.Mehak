// is a data type or data structure. variable mai ek se zyada data de sakte hain.
// use to store multiple data
// we use square brackets []
// array mai address zero se start hoga
// address ko index bhi kehte hain array mai
var students = ["Noman", "Ali", "Naseem", 1, 10, true]; // type any hogi
// noman ka address 'index zero' hai
console.log(students);
// index 0 se start hota hai
// individual naam console kerwana hoto
var firstStudentName = students[0];
console.log(firstStudentName);
var secondStudentName = students[1];
console.log(secondStudentName);
console.log(students[5]); // ek ko console kerwana hoto
console.log(students[1], students[4]); // list mai se ek se zyada console ke liye
// sirf string ki list hogi to
// let students: string[] = ["Noman", "Ali", "Naseem"]
// task
//create boolean and number array
var areYouHuman = [true, false];
console.log(areYouHuman);
var dates = [2, 3, 4, 5,];
console.log(dates);
var fruits = ['apple', 'cherry', 'mango'];
fruits[0] = 'strawberry'; // changes ke liye
console.log(fruits);
