someone = 20;
samp();
// it wont show error for the someone though it has no declaration
function samp () {
    "use strict";
   some = 10; // it will show error as its not declared properly
}

function samp () {
    some = 10;
    "use strict";
   console.log(some); // prints 10 no error
}



"use strict"

a = 9; // var is not declared
console.log(a);


function x(p1, p1) { // duplicate parameter is not allowded
    return p1;
};  
console.log(x(2,4));

function y(p1, p1=10){ // duplicate is not allowded so cant set teh default value
    return p1+p2;
}
console.log(y(5));


function add(a,b=1){
    return a+b;  // works fine even though it has default param
} // since the strict mode is global
console.log(add(2));

function sum(a , b = 2) {
  //"use strict"; // through error if its inside a function as strict mode cant be 
  return a + b;  //inside a function which has param as rest, destructing, default
}
console.log(sum(3));