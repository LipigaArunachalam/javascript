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