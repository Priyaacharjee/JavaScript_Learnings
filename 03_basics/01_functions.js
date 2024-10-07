function myName(){
    console.log("Priya");
}

//myName()

// function sumTwo(num1,num2){
//     console.log(num1 + num2);
// }

function sumTwo(num1,num2){
    // let res=num1+num2;
    // return res

    return num1+num2;
}

const result=sumTwo(3,4)
//console.log("Result:",result);

function loginuserMsg(username="riya"){ //if there is no value riya will get printed
    if(username===undefined){ //(!username)-->also can use this
        console.log("plz enter the username"); 
        return   //if this executes further lines will not get executed    
    }
    return `${username} just logged in`
}

//console.log(loginuserMsg())


function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"priya",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,100,500]));



