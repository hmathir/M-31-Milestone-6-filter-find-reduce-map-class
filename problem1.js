/*1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number. */

// Using 'map':
const oddNumArray = [1,3,5,7,9];
const convertedEvenArray = oddNumArray.map(num => num + 1)
console.log(convertedEvenArray);


// Using for of:
const newEvenArray = [];
for(num of oddNumArray){
    newEvenArray.push(num + 1)
}
console.log(newEvenArray);



/* 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. */

const givenArray = [33, 50, 79, 78, 90, 101, 30 ];
const newReturnedArrayOneUsingFilter = givenArray.filter(num => num % 10 === 0);
console.log(newReturnedArrayOneUsingFilter);



/*3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3. */

const newReturnedArrayTwoUsingFind = givenArray.find(num => num % 10 === 0);
console.log(newReturnedArrayTwoUsingFind);