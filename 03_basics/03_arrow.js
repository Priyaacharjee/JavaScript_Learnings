const user={
   username:"Priya",
   price:999 ,

   welcomemsg:function(){
    console.log(`${this.username},welcome to website`);
    console.log(this);
   }
}
//user.welcomemsg()
//console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()

const chai=()=>{
    let username="priya"
    console.log(this);   
}
//chai()

// const addTwo=(num1,num2)=>{
//      return num1+num2;
// }
// console.log(addTwo(5,5));

//const addTwo=(num1,num2)=> num1+num2;

//const addTwo=(num1,num2)=> (num1+num2); //() does not require return statement

const addTwo=(num1,num2)=> ({username:"oreo"});
console.log(addTwo(5,5));

// const myarray=[2,5,7,8,9]

// myarray.forEach