// Original array
let numbers = [5, 3, 8, 1, 2, 9];

//  Sort Ascending
let asc = [...numbers].sort((a, b) => a - b);
console.log("Ascending using spread operator:", asc);  // [1, 2, 3, 5, 8, 9]
let ascc = numbers.sort((a,b) => a-b);
console.log("Ascending:", ascc);  // [1, 2, 3, 5, 8, 9]

//  Sort Descending
let desc = [...numbers].sort((a, b) => b - a);
console.log("Descending:", desc);  // [9, 8, 5, 3, 2, 1]

// Reverse Array
let reversed = [...numbers].reverse();
console.log("Reversed:", reversed);  // [9, 2, 1, 8, 3, 5]

//  Push - add to end
numbers.push(10);
console.log("After push:", numbers);  // [5,3,8,1,2,9,10]

//  Pop - remove last
numbers.pop();
console.log("After pop:", numbers);  // [5,3,8,1,2,9]

//  Unshift - add to beginning
numbers.unshift(0);
console.log("After unshift:", numbers);  // [0,5,3,8,1,2,9]

//  Shift - remove first
numbers.shift();
console.log("After shift:", numbers);  // [5,3,8,1,2,9]

//  Slice - get subarray (non-destructive)
let sliced = numbers.slice(1, 4);
console.log("Sliced (1 to 3):", sliced);  // [3,8,1]

// Splice - remove and insert (destructive)
numbers.splice(2, 1, 99); // Remove 1 item at index 2, insert 99
console.log("After splice:", numbers);  // [5,3,99,1,2,9]

//  Map - create new array
let doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);  // [10,6,198,2,4,18]

//  Filter - keep even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);  // [2]

//  Find - get first value > 5
let firstGT5 = numbers.find(n => n > 5);
console.log("First > 5:", firstGT5);  // 99

//  Join - convert to string
let joined = numbers.join("-");
console.log("Joined:", joined);  // "5-3-99-1-2-9"
let num = joined.split("-").map(Number);
console.log("Splitted:", num); 

//  Flatten nested array
let nested = [1, [2, 3], [4, [5, 6]]];
let flat = nested.flat(2); // flatten 2 levels
console.log("Flattened:", flat);  // [1,2,3,4,5,6]

// flat map
let arr =[1,2,3,4,5,6,8,9,7];
let res = arr.flatMap((data)=> [data, data*10]);
console.log(res);


//  Check if all values are > 0
let allPositive = numbers.every(n => n > 0);
console.log("All positive?", allPositive);  // true

//  Check if some values are even
let hasEven = numbers.some(n => n % 2 === 0);
console.log("Has even?", hasEven);  // true

//  Reduce - sum of array
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);  // 119