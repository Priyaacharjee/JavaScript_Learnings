// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power:${power}`);
    
// }

const balance=1000
//if(balance>500) console.log("test");

const userLoggedIn=true
const debitcard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitcard){
    console.log("Allow to buy course");
    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Allow to log in")
}