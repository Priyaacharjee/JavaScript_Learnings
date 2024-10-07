let a=300

if(true){   //{}-->scope
    let a=10
    const b=20  
    var c=30
}  

//console.log(a);
// console.log(b);
//console.log(c);

function one(){
    const username="Priya"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
}

//one()

if(true){
    const username="Priya"
    if(username==="Priya"){
        const website=" youtube"
        //console.log(username+website);       
    }
    //console.log(website);    
}
//console.log(username);

//+++++++++++++++++++++interesting++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1
}

//addTwo(5) this can't be accessed here (hoisting)
const addTwo= function(num){
    return num+2
}

addTwo(5)