const obj = {
  name: "Hello",
  showThis() {
    console.log(this);
  }
};
// this is an object it return the obj before the . 
obj.showThis(); // this === obj



// this in obj
const a = {name: "A"};
const b = {name: "B"};

function sayHi() {
  console.log(this.name);
  return this; // here the obj is returned
}

a.sayHi = sayHi; // assigns the function to the a obj and b obj
b.sayHi = sayHi;

a.sayHi(); // A since here we didnt print the obj
 
console.log(b.sayHi()) // prints the properties of it since the returned this is an obj


// strict and instrict mode  : non-strict: global object, strict: undefined
function notMethod() {
  "use strict" // it prints indefined
  console.log(this); // without strict it prints the global window obj
}

notMethod(); 


// this in arrow function
const person = {
  name: "Alice",
  greet: () => {   // arrow cant handle this keyword 
    console.log(this.name);
  }
}
// if there is an function outside the arrow function it can access that reference else undefined
person.greet(); // undefined



// arrow fn inside another function
const person1 = {
  name: "Alice",
  greet:function () {
    samp = ()=>{
      console.log(this.name);
    }
    samp();
  }
}
person1.greet(); // alice is printed



// prototype for primitive types
function getThisStrict() {
  "use strict";
  return this;
}

Number.prototype.getThisStrict = getThisStrict;
console.log( (7).getThisStrict()); // returns 7 here 

function getThisStrict() {
  "use strict";
  return this;
}

String.prototype.getThisStrict = getThisStrict;
console.log( ("hi").getThisStrict()); // returns hi


const arrow = () => {
  console.log(this);
};
arrow();  // prints either {}, undefined or window



// this in constructor function
function C() {
  this.a = 37;
}

let o = new C();
console.log(o.a); // 37

function C2() {
  this.a = 37;
  return 10; // if primitive type is returned then the this.a is taken
}  // if return {a : 29} then only considers this one
// if {b.4} is returned then it returns undefined
o = new C2();
console.log(o.a); // 38