import sortHealth from "./matchers";

const arr = [
  { name: "bowman", health: 81 },
  { name: "swordsman", health: 13 },
  { name: "magician", health: 67 },
];

console.log(sortHealth(arr));