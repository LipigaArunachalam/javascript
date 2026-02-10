class js{
    constructor(){
        this.name = null;  // if here its undefined it returns undefined
        this.age = 2;
        console.log(typeof(this.age),typeof(this.name)); // number and object
    } 
    method1(){
        this.age = "hello";
        this.name = 34;
        console.log(typeof(this.age),typeof(this.name)); // string and number
    }
}
let c = new js();
c.method1();   // js can switch like this no fixed datatype