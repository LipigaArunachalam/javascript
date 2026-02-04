const user ={
    name:"lipiga",
    dob:"25-11-2004",
    "birth place" : "hosur",
    greet(){
        console.log(this.name);
    },
    greetu(){
        console.log(user.name);
    }
};

user.greet();  // calling the greet method
const admin = {...user}; // copy of user in another obj
//const admin = user; refer to same obj in memeory hence if we change anything in 
// user it will be affected in admin also
console.log(admin);
admin.greetu(); // here it prints the name 
user.name = null;
admin.greet();
admin.greetu(); // returns null coz our obj is admin but it access user obj
// so its safe to use this than the obj coz copying and using 
// in another wil show unexpected results


console.log(user);
user['age']=21;   // to add a property to the obj
console.log(user);
delete user.dob;   // deletes an property from obj
console.log(user);
console.log(user["birth place"]); // if a key is having space or its a string we use [] with ""
user.name = "kamali";
console.log(user.name);
console.log(user);


const e = (function print(){
    console.log(this);  // in func it returns global obj window
})();


let user = new Object();
user ={
    name:"lipiga",
    dob:"25-11-2004",
    "birth place" : "hosur",
    num : [1, 3, 5 ,2],
    greet(){
        console.log(this.name);
        this.num.forEach(function(n){
            console.log(this.dob+" "+ n);
        })//prints undefined and the num
        // in callback function this refers to global obj 
    },
};
user.greet();  

let user1 = new Object();
user1 ={
    name:"lipiga",
    dob:"25-11-2004",
    "birth place" : "hosur",
    num : [1, 3, 5 ,2],
    greet(){
        console.log(this.name);
        this.num.forEach(function(n){
            console.log(this.dob+" "+ n);
        },this)   // prints the dob and then num
    },
};
user1.greet();  