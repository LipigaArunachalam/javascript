let n  = 6;
console.log(typeof(n)); // number
n = `${n}`; // converts to string
console.log(typeof(n)); // string


let name = "lipiga";
let greet = "hello";
console.log(`${greet} there ${name}`); // using backtick
console.log(greet+" there "+name);