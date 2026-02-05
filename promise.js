// promise in function expression
let myPromise = new Promise(function(myResolve, myReject) {
  result = false;

  if (result == true) {
    myResolve("OK");  // if true ,resolve the promise
  } else {
    myReject("Error");  // if false, rejects the promise
  }
});

myPromise.then(x => myDisplay(x), y => myDisplay(y));
// the promise return the value here if its resolved to x and if rejected to y 
// hence based on that we can call the display function with respective value

function myDisplay(some) {
  console.log(`${some}`);
}



// promise in return using then and catch

function sample(){
  return new Promise((resolve, reject)=>{
       let egg = false;
       if(egg){
        return resolve("egg");
       }
       else{
        return reject("no egg"); // since its false no egg is returned
       }
  });
}

function cook(){
  sample().then((msg)=>{
    console.log(msg);
  }).catch((err)=>{
    console.log(err);   // it prints no egg here
  });
}

cook();


// promise using async and await works as async

function sample1(){
  return new Promise((resolve, reject)=>{
       let egg = false;
       if(egg){
        return resolve("egg");
       }
       else{
        return reject("no egg");
       }
  });
}

async function cooked(){
  try{
   let example = await sample1();  // coz of this the whole fn is paused and the 
    console.log(example);          // yeilding control is given to the eventloop
   }                               // after the promise is returned it resumes
   catch(err){
    console.log(err);             //the remaining functions runs without blocking 
   }
}

cooked();
console.log("last");       // its printed first before the promise


//promise using await  same as synchronous

function sample1(){
  return new Promise((resolve, reject)=>{
       let egg = false;
       if(egg){
        return resolve("egg");
       }
       else{
        return reject("no egg");
       }
  });
}
  try{
   let example = await sample1();  // sice it not async fn it works like synchronous
    console.log(example);
   } 
   catch(err){
    console.log(err);
   }
console.log("last");    // printed at the end after the promise



// nested promises with async async and await
function sample1(){
  return new Promise((resolve, reject)=>{
       let egg = true;
       if(egg){
        return resolve("egg");
       }
       else{
        return reject("no egg");
       }
  });
}

function sample2(ex){
    return new Promise((resolve, reject)=>{
            console.log("There are more eggs");
            return resolve("done");
    })
}
async function eg(){
  try{
   let example = await sample1();
    console.log(example);
    let example1 = await sample2(example);
    console.log(example1);
   } 
   catch(err){
    console.log(err);
   }
}
eg();
console.log("last");
for(let i =0;i<4 ;i++){
    console.log(i+" ");
}




//promise all function
Promise.all([     
    Promise.resolve("Task 1 done"),
    Promise.resolve("Task 2 done"),
    Promise.reject("Task 3 failed"),
    Promise.resolve("Task 4 done"),
])
    .then((finalResult) => console.log(finalResult))
    .catch((error) => console.error(error));

    // all is used when we need all the promises to be resolved
    // allsettled is used when we need the result of all promises like either resolved or rejected
    // any is shows the first resolved promise if all are rejected then error
    //race settles with 1st return promise either  resoled or rejected