//Sort in higher Order Function

//Acceding order
//value = a-b => positive = swap
//value = a-b => negative = noSwap

let arr=[20,30,40,6,1,2,3]

let value=arr.sort((a,b)=>{
     return a-b
})

console.log(value);



//decending order
//value = b+a => positive = swap
//value = b+a => negative = noSwap

let arr1=[10,20,30,40,50,60,70]

let value1 =arr1.sort((a,b)=>{
      return b-a 
})

console.log(value1);



//Some method
  // some method is working based on (Or || ) type  

let arr2=[10,20,30,45,50,60,75]

let someVal = arr2.some((ele,index,arr)=>{
      return ele %2 == 0
})
console.log(someVal);



//Every Method
   // every method is working based on (And && ) type  
let arr3=[10,20,35,40,55,60,75]

let everyVal = arr3.every((ele,index,arr)=>{
      return ele %2 == 0
})
console.log(everyVal);
