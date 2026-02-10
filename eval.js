let res1 = eval("2 + 2");  // returns 4
let res2 = "2+2";

console.log(res1 ==  res2); // since its 4 it wont be same
console.log(res1 ===  res2);

let res3 = eval("let x =20; if(x%2==0) x+=40;"); // executes the strings
console.log(res3)
