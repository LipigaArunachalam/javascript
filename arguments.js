function arg(){
    let res ='';
    for(let i=0;i<arguments.length;i++){
        res += arguments[i] + ' ';
    }
    return res;
}

console.log(arg('Hello','this','is','arguments','object'));




const e1 =(()=>function(){ // arrow fn doesnt have the arguments obj so to use that we need 
    let res ='';           // iife so hence we need a fn to call thats  y we use the function()
    for(let i=0;i<arguments.length;i++){
        res += arguments[i] + ' ';
    }
    return res;
})();
console.log(e1('Hello','this','is','arguments','object'));