// object

// const persons = {
//   name: "hadi",
//   age: 23,
//   status: "developer",
//   education: "BSCS",
//   // "react",
//   // "html"
// };

// console.log(persons["education"]);
// console.log(persons.education);

// const skills = ["react", "html"];

// console.log({ ...persons, tumhrePassKiyaHai: skills });

// for (let i in persons) {
//   console.log(i, persons[i]);
// }

// console.log(Object.keys(persons));

// const products = [
//   {
//     name: "laptop",
//   },
//   {
//     name: "dell",
//   },
//   {
//     name: "laptop",
//   },
//   {
//     name: "laptop",
//   },
// ];

// n=1 -> 0
// n=2 -> 0 1
// n=3 0 1 2

// ...

// func1(...args){
//   //
// }
// func1(1,2,3,4,5,5,6)

const mem = (fn) => {
  const prev = {};

  return (...args) => {
    if (prev[args]) {
      return;
    }

    // apply, bind
    const result = fn.apply(this, args);
    prev[args] = result;

    return result;
  };
};

// fib(15)

// fib(5)

const fib = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};
// const checker = mem(fib(15));
// console.log(checker());
