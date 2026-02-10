const obj = {
  my () {  // no need for my: fun (){}
    console.log("Hello!");
  }
};
obj.my();


let name = "wejkh";
let age = 2;
const person = {pname : name, page : age};
const person1 = {name, age}; // easily asign the var to obj
console.log(person);
console.log(person1);


let key = "score";

const obj1 = {
  [key]: 100
};
console.log(obj1);