const user={
    username:"Priya",
    loginCount:"6",
    signedIn:true,

    getuserDetail:function(){
        //console.log("got details")
       // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getuserDetail());

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greetings=function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}
const userOne=new User("Priya",6,true)
const userTwo=new User("Riya",7,false)
console.log(userOne.constructor);
//console.log(userOne)