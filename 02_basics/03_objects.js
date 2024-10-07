//singleton


//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"priya",
    age:18,
    [mySym]:"mykey1",
    location:"sonarpur",
    isloggedin:false,
    logindays:["Monday","saturday"]
}

// console.log(JsUser.location);
// console.log(JsUser["location"]);
// console.log(JsUser[mySym]);

//JsUser.location="Dhakuria"
//Object.freeze(JsUser)
JsUser.location="kolkata"
console.log(JsUser);

JsUser.greeting=function(){
    console.log(`hello,${this.name}`);
    
}

console.log(JsUser.greeting());

