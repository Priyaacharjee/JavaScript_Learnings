const myArr=[0,1,2,3,4,5]

const myArr2=new Array(1,2,3,4)
//console.log(myArr2[2]);

//Array Methods

// myArr.push(6)
// console.log(myArr);
// myArr.pop()

// myArr.unshift(9) //adds 1st element
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr=myArr.join() //converts array to string

// console.log(myArr);

console.log("A",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3)
console.log("C ",myArr);  //splice manipulates the array but slice does not

console.log(myn2);






