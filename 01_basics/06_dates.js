
let date=new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());

// console.log(typeof date);

let mydate=new Date(2023,0,23)
console.log(mydate.toDateString())

let myTimestamp=Date.now();
// console.log(myTimestamp);
// console.log(mydate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})



