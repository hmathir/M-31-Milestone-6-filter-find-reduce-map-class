/* 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method. */

// Using Reduce:
const array = [ 1, 9, 17, 21 ];
const addArray = array.reduce((pn,cn) => pn + cn, 0);
console.log(addArray);

// Using For:
let sum = 0;
for(const arr of array){
     sum = sum + arr;
}
console.log(sum);
