//Immediately Invoked Function Expressions(IIFE)

//Global scope ki pollution se problem hoti hai kahibar,so to remove those pollutions from the variables or declarations in that scope we use IIFE

(function chai(){
    console.log(`DB Connected`);
    
})();

((name)=>{
    console.log(`DB Connected two ${name}`);
})('Priya')