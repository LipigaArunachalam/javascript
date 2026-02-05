//constructor function
function Lap(brand, price, size){
    this.brand = brand;
    this.price = price;
    this.size = size;
    this.color = function(){
        return `${this.brand} is black`;
    };
    // hello(){
    //     console.log("hello world");    cant define methods like this 
    // }                                  inside the constructor function
}
const lap1 = new Lap("dell", 20000, 30);
const lap2 = new Lap("hp", 15000, 10);
console.log(lap1.price);
console.log(lap2.color());



//class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice
