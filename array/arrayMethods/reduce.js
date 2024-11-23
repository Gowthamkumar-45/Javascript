let arr =[10,20,30,40,50]

let val = 0;
for(let i=0; i<arr.length; i++){
     val=val+arr[i];

}
console.log(val);


//reduce Method

let arr1 =[100,200,300,400,500]

let totalVal = arr1.reduce((acc,currElement,index,array)=>{
    return acc +currElement
    
},0)
console.log(totalVal);


let person1=[
    {uName:"xyz",salary:10000},
    {uName:"xyz",salary:20000},
    {uName:"xyz",salary:30000}
]

let reduceVal=person1.reduce((acc,currElement,index,array)=>{
    return acc+currElement.salary
},0)
console.log(reduceVal);

