let result=document.getElementById("inputtext")

const calculate=function(number,element){
   result.style.backgroundColor=""
   changeButtoncolor(element);
   return result.value+=number
}

let res=(element)=>{
    try{
        result.value=eval(result.value)
        changeButtoncolor(element);
    }catch(err){
        alert("Enter valid exppression")
    }

}

function clr(element){
    result.value=" ";
    changeButtoncolor(element);
}

function del(element){
    result.value=result.value.slice(0,-1);
    changeButtoncolor(element);
}

function changeButtoncolor(button){
   button.style.backgroundColor="lightblue";
   setTimeout(() => {
       button.style.backgroundColor="";
    },200);
}
