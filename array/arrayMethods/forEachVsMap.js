//ForEach Method

let fruits = ["Apple","Orange","Mango","Banana","Grapes"]

// fruits.forEach((currentElement,index,setOfArray)=>{
//     console.log(currentElement,index,setOfArray);  
// })

function fruitsVal(currentElement,index,setOfArray){
    console.log(currentElement,index);
    
}
fruits.forEach(fruitsVal);

// //forEach Method can't return any Values
// let val=fruits.forEach((currentElement,index,setOfArray)=>{
//    return currentElement,index
// })



//Map Method
// let fruits1 = ["Apple","Orange","Mango","Banana","Grapes"]

// fruits1.map((currentElement,index,setOfArray)=>{
//     console.log(currentElement,index,setOfArray);
// })

// function fruitsVal1(currentElement,index,setOfArray){
//     console.log(currentElement);
// }
//  fruits1.map(fruitsVal1)

//map Method can return  Values
// let val1=fruits1.map((currentElement,index,setOfArray)=>{
//     return currentElement
//  })
//  console.log(val1);

//  let val2=fruits1.map((currentElement,index)=>{
//       return {id:index+1,currentElement}
//  })
//  console.log(val2); 
 
 //chaining method

//  let fruits2 = ["Apple","Orange","Mango","Banana","Grapes"]

//  let value = fruits2.map((ele,index) => {
//     return (ele).toUpperCase()
//  })
//  console.log(value);
 

 