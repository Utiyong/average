let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let average = sum / a.length;

console.log("The average is:", average);
