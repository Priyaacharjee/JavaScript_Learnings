const userEmail=[]

if(userEmail){
    console.log("Got user mail");
    
}else{
    console.log("Dont have user email");
    
}

//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){} 

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5 ?? 10
// val1=null ?? 10
val1= undefined ?? 15
console.log(val1);

//Terniary Operator

const iceTea=100
iceTea<=80 ? console.log("less than 80"):console.log("more then 80")