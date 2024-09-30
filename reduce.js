// const numbars = [1, 2, 3];

// let sum = 0;
//  for( let item of numbars) {
//     sum += item;
//  }

//  console.log(sum);
 
// let multy = 1;
//  for( let item of numbars) {
//     multy *= item;
//  }

//  console.log(multy);

//reduce ES6

// const numbars = [1, 2, 3, 6];

// const sum = numbars.reduce((p, c) => p + c);
// console.log(sum);
// const multy = numbars.reduce((prev, current) => prev * current);
// console.log(multy);
const numbar = [
    {a: 1},
    {a: 2},
    {a: 3},
    {a: 4},
    {a: 5}  
];

const total = numbar.reduce((p, c) => p + c.a, 0);
console.log(total);
const multy = numbar.reduce((p, c) => p * c.a, 1);
console.log(multy);

