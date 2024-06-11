// Map
// Filter
// find
// findIndex
// Slice
// pop, push, shift, unshift
// reducer
// splice
//

// const arr = [1, 2, 3, 4, 5, 2, 4, 5, 6, 6, 7];

// MAP FUNC

// slice

// console.log(arr.slice(0, 1));

// filter, map, find, findIndex, flatMap, reduce, sort,

// function _name (){}
// const _name = () => {}
// ()=>{}

//  arr.map((i) => i > 4 && console.log(i));

// const arr2 = arr.map((i) => {
//   return i > 4 && i;
// });

// console.log(arr2);

// HOF take callback
// [1, 2, 3, 4, 5].map((i) => {
//   console.log(i > 2 ? i : "");
// });

// Conditions

// FILTERS
// const arr2 = arr.filter((i) => {
//   return i > 4;
// });

// console.log(arr2);

// DEEP AND SHALOW DEEP
// const oldNames = ["hadi", "ali", "hassan", "abbas", "jarrar", "karrar"];

// names.pop(); push shift unshift

// console.log(names);

// const newNames = ["firstName", ...oldNames, "lastName"];

// console.log(oldNames, "new names");
// console.log(newNames, "here is the new names");

// func1( func2 )

// if (a > 5) {
//   console.log("a is greater than 5");
// } else {
//   console.log("a is smallar than 5");
// }

// // CPP
// a > 5 ?  console.log("a is greater than 5") : console.log("a is smallar than 5");

// let a = 100;
// if (a > 5) {
//   console.log("G");
// } else if (a < 0) {
//   console.log("N");
// } else {
//   console.log("Nothing");
// }

// a > 5 ? console.log("G") : a < 0 ? console.log("N") : console.log("Nothing");

// Logic

// 15
// 3 multiples fizz
// 5 multiples buzz
// 3 and 5 multiples fizzbuzz

const func = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    }
  }
};

func(15);
