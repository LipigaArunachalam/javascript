function cooked(){
  try{
   
    console.log(example); // example is not defined
   } 
   catch(err){
    console.log(err.name);  // reference error , error name
    console.log(err.message);  // says what is the issue
    console.log(err.stack);  // prints the stack
   }
}

cooked();


function cook(){
  try{
    let example = 1;
    example.toUpperCase();  // since number cant be converted to upper case
    console.log(example); // example is num not a string
   } 
   catch(err){
    console.log(err.name);  // type error , error name
    console.log(err.message);  // says what is the issue
    console.log(err.stack);  // prints the stack
   }
}

cook();