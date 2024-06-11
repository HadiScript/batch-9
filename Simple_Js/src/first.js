// const _name = "hadi raza";
// array -> 0
// azar idah

// console.log(_name[2]);
// console.log(_name[7]);

// function CountLetters(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }

// hadiraza str[i]
// function ReverseStr(str) {
//   let count = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] !== " ") count = count + str[i];
//   }
//   return count;
// }

// console.log(ReverseStr(_name));
// console.log(" hadi raza ".trim());

// const reverse = (str) => {
//   let rvrs = "";

//   for (let oneLetter of str) {
//     rvrs = oneLetter + rvrs;
//   }

//   return rvrs;
// };

// console.log(reverse("hadiraza"));

// const str = "hadi-raza";
// str.split("-"); // ["hadi", "raza"]

// const reverseStr = (str) => {
//   let arr = str.split("");
//   let reArr = arr.reverse();

//   return reArr.join(""); // ['h','a','d','i']
// };

const reverseStr = (str) => str.split("").reverse().join(""); 
// Machine learning

console.log(reverseStr("raza"));
