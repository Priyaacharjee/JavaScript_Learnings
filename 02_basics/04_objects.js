//const tinderUser=new Object() //singleton object

const tinderUser={}

tinderUser.id="123456"
tinderUser.name="Priya"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Priya",
            lastname:"Acharjee"
        }
    }
}

//console.log(regularUser.fullname.userFullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4) //{}-->target obj1,obj2..-->source

const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"p@gmail.com"
    },
    {
        id:2,
        email:"p@gmail.com"
    },
    {
        id:3,
        email:"p@gmail.com"
    }
]

users[1].email
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    coursename:"JS",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor

const {courseInstructor:instructor}=course

//console.log(courseInstructor);
console.log(instructor);

//APIs

// {
//     "name":"Priya",
//     "coursename":"js",
//     "price":"free"
// }

[
    {},
    {},
]