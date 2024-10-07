let score ="33"

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//"33"=>33
//"33abc"=>NaN
//true => 1;false =>0
//""=>false
//"Priya" => true

console.log("1"+2+2);
console.log(1+2+"2");

//+++++++++++++++++++++++++++++++Memory++++++++++++++++++++++

//Stack(Primitive)(gets a copy), Heap(Non-Primitive)(gets a reference)

let myName="Priya"

let anothername=myName
anothername="Chagol"

console.log(myName);
console.log(anothername);

let user={
    email:"priya@gmail",
    upi:"user@ybl"
}

let user2=user

user2.email="hitrdhjk@google"

console.log(user.email);
console.log(user2.email);

