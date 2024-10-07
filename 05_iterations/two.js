//for of

const arr=[1,2,3,4,5]

for(const num of arr){
  //console.log(num);
}

const greetings ="Hello world!"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`)
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"Unites state")
map.set('Fr',"France")

//console.log(map);   //for in loop dont work on map

for(const [key,val] of map){
   // console.log(key,val);
}

const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming =["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(programming[key]);
    
}
