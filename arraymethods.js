let array = ["a", "d", "c", "d", "b"];

array.splice(1, 0, "Feb");// add feb at 1st position not replace here if 1, 1, feb given replaces
console.log(array);
array.sort();
console.log(array);
console.log(array.slice(2));
console.log(array);

console.log(array.includes("b"));
console.log(array.indexOf("b"));

console.log(array.copyWithin(0, 2, 4));

const iterator = array.entries();

console.log(array.fill(0, 2, 4));
//console.log(array.fill(0))  puts everything to zero

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat(Infinity));

const sentences = ["it's Sunny in", "", "California"];
console.log(sentences.map(x => x.split(" ")));
console.log(sentences.flatMap(x => x.split(" ")));
let res = sentences.flatMap(x => x.split(" "));

const elements = ["Fire", "Air", "Water"];
console.log(elements.join("-"));
console.log(elements);

let arr = ["a", "z" , "w","j"];
//console.log(arr.reverse());
console.log(arr);
console.log(arr.toReversed());
console.log(arr);

console.log(arr.toString())
console.log(arr);
