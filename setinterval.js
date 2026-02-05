let count=0;
function msg(){
    count+=1;
    console.log("interval");
    if(count>4){               // when the count is greater than 4 interval is cleared
        console.log("clear");  // else its infinite loop
        clearInterval(eg);
    }
}
let eg = setInterval(msg,2000);  


for(var i=0;i<4;i++){
    setTimeout(() => {
        console.log(i);   // it prints the 5 value 5 times since var is not a 
    }, 1000);             // block scoped it works as functional scope and the
}                         // last assigned value is used

// it works fine if let is used since its block scope