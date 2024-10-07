class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const priya=new User("Priya")
//console.log(priya.createId())

class Teacher extends User{
    constructor(username,email){
       super(username)
       this.email=email
    }
}

const iphone =new Teacher("iphone","iphone@gmail.com")
iphone.logMe();