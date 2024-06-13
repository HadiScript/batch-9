const myList = [
  { name: "hadi", role: "developer" },
  { name: "abbas", role: "database manager" },
  { name: "ali", role: "architecture" },
  { name: "hussin", role: "designer" },
];

// const names = myList.map((x) => x.name === "hadi");

// console.log(names);

// const person = {
//   name: "hadi",
//   role: "gamers",
// };

// const person2 = {
//   ...person,
//   role: "developer",
// };

// console.log(person2);

const func = (name, role) => {
  return myList.map((x) => (x.name === name ? { ...x, role } : x));
};

console.log(func("hadi", "gamer"))