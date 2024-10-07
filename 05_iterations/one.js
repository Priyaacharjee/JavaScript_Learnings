// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);  
// }

for (let i = 0; i <=10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        //console.log(i+'*'+j+'='+i*j);
    }   
}

//break and continue

let myArray=['flash','batman','superman']

let arr=0
while(arr<myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr+=1;   
}

let score=1
do{
    console.log(`Score is ${score}`);
    score++;

}while(score<=10)