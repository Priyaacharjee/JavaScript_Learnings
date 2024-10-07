const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNums.map((num)=>num+10)

const newNums=myNums.map((num)=>num*10).map((num)=>num+1)
              .filter((num)=>num>=40)
//console.log(newNums);

// const myTotal=myNums.reduce(function (acc,curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);   
//     return acc+curval
// },0)

const myTotal=myNums.reduce((acc,curval)=>acc+curval,0)

//console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js Course",
        price:2999
    },
    {
        itemName:"python",
        price:999
    },
    {
        itemName:"mobile Course",
        price:5999
    },
    {
        itemName:"DS course",
        price:4999
    },
]

const totalCart=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalCart)


