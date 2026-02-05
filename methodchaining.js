class Ex {
    constructor (val){
        this.sum = val;
    }
    add(val){
        this.sum+=val;
        return this;   // if this.sum is returned shows error as the next method is called 
                    // on the return value of add so we need obj to refer it
    }
    sub(val){
        this.sum-=val;
        return this;
    }
    print(){
        return this.sum;
    }
}
let b = new Ex(4);  // since the methods are called in chain the return value should be a obj 
                    // so the next method can access the variable using the this
console.log(b.add(3).sub(6).print());   // 4+3-6 =1
