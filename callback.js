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
    console.log("t1 done");
    callback();
}

function t2(callback){
    console.log("t2 done");
    callback();
}

t1(function(){
    console.log("callback of t1");
    t2(function(){
        console.log("callback of t2");
    });
})