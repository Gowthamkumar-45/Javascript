let input =document.querySelector("input")
function addValue(elementVal){
     input.value = input.value + elementVal;
     
}

function clearVal(){
    input.value=""
}

 function deleteVal(){
    input.value=input.value.slice(0,length-1)
 }

 function evaluateVal(){
    try{
       input.value=eval(input.value) 
    }
    catch(err){
        input.value="Error"
    }
    
 }
 
