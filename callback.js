// 1 callback function
function task1(callback) {
    setTimeout(() => {
        console.log("Task One completed");
        callback();
    },1000);
}

function task2() {
    setTimeout(() => {
        console.log("Task Two completed");
    },1000);
}

task1(task2);


// 2 callback funstions

function t1(callback){
    console.log("t1 done");   // prints t1 done
    callback();               // callback of t1 is printed then t2 is called
}

function t2(callback){
    console.log("t2 done");    // ts done is printed
    callback();                // callback of t2 is printed
}

t1(function(){
    console.log("callback of t1");
    t2(function(){
        console.log("callback of t2");
    });
})


function call(callback, n,m){
    callback(n,m);
}
function add(a,b){
    console.log(a+b);
}
call(add,2,5);   // prints 7