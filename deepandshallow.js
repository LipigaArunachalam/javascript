// shallow copy
let c = [1,2,3,[4,5]];
let d = [...c];
d[3][1] =6;
console.log(c[3][1]);

const a ={
    name : "lipiga",
    address : {
        city : "hosur",
    },
}
const b = {...a};
b.address.city = "chennai";
console.log(a.address.city); // its shallow copy that is when we copy a 
// object or array to another if its nested then if we change anything 
// in the copy function then it will reflect in og coz if nested 
// it copy the reference not the value


//deep copy
let e = [1,2,3,[4,5]];
let f = structuredClone(c);
// JSON.parse(JSON.stringify(c)) it convert everything to string and then to its type complex
f[3][1] =6;
console.log(e[3][1]);

const g ={
    name : "lipiga",
    address : {
        city : "hosur",
    },
}
const h = structuredClone(g);
h.address.city = "chennai";
console.log(g.address.city); 