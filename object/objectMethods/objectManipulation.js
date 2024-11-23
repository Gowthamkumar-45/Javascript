let person = {
    uName : "SivaGuru",
    uAge : 21
}

console.log(person);


// let arr = [10,20,30,40,50]

// console.log(arr);

//object.create

let newObj = Object.create(person);
newObj.location = "tamilNadu"
console.log(newObj.__proto__);
console.log(Object.getPrototypeOf(newObj));
console.log(newObj);

//object.assign 
let empDetails = {
    empName : "david",
    empAge :21
}

let empVal = Object.assign (empDetails,{empSalary:1000, empRole : "Frontend Developer"})

console.log(empVal);

//object.entries is used convert a object into multidimensional array

let person1 = {
    pName : "John David",
    pAge : 21,
    pSalary : 1000,
    pRole : "frontend Developer"
}

let pVal1 = Object.entries(person1);
pVal1.push(["sub","javascript"])//its created for check the fromEntries
console.log(pVal1);

//object.fromEntries is used convert multiDimensional array in to object

let fromVal = Object.fromEntries(pVal1)
console.log(fromVal);

//object.key is used for getting key value of the object

let keyVal=Object.keys(fromVal)
console.log(keyVal);

//object.value is used for getting the value of the object
let Val = Object.values(fromVal)
console.log(Val);


