// closure example with setTimeout

const e = (function(){
      for(let i =0;i<4;i++){
            setTimeout(function(){
                console.log(`time ${i}`);
            }, i*2000);
      }
})();

//closure example with iife

const counter = (function () {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log("Counter reset");
        },
    };
})();

counter.increment(); 
counter.increment(); 
counter.reset();


//clsore example 

function examp() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log("Counter reset");
        },
    };
};
const c = examp();
c.increment(); 
c.increment(); 
c.reset();