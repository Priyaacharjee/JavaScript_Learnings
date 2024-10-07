// let myname="Priya     "

// console.log(myname.truelength)

let myHeroes=['thor','spiderman','ironman'];

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    ironman:"suit",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.priya=function(){
    console.log(`priya is preseni in all objects`);
    
}

Array.prototype.heyPriya=function(){
    console.log('Priya says hello');
}
//heroPower.priya()

myHeroes.priya()
myHeroes.heyPriya()
//heroPower.heypriya()

//inheritance
const User={
    name:"Priya"
}
const Teacher={
    makeVideo:true
}

const TeachSupport={
    isAvailable:false
}

const TAsupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachSupport
}

Teacher.__proto__=User

//modern syntax
Object.setPrototypeOf(TeachSupport,Teacher)

let anotherUser="Pritam   "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);   
    console.log(`True length is: ${this.trim().length}`)
}

anotherUser.trueLength()
"priya".trueLength()