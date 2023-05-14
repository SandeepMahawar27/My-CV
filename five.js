// sum of two numbers

const sum = (a,b) => a + b;
console.log(sum(50,10));

// to check if all elementss in an array a given pedicative

var arr = [2,4,6,7];
var arr = [2,4,6,8];
let isEven = arr.every((curVal) => curVal % 2 === 0);
console.log(isEven);

// use the spread operator to concatanta arrays

let arr1 = [2,4,6];
let arr2 = [8,9,12];
let arr3 = [...arr1, ...arr2];
console.log(arr3);


// if function that take array and return a new array with all elements aquared

let arr4 = [2,4,6];
// arr5 = [4,16,36]
let arr5 = arr4.map((curVal) => curVal * 2);
console.log(arr5);

// find element

let arr6 = [2, 4, 6];

console.log(arr6.includes(4));