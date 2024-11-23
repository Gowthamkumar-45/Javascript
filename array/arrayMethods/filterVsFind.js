let employees = [
    {empName:"siva",salary:2000},
    {empName:"sham",salary:100000},
    {empName:"raj",salary:1000},
    {empName:"guru",salary:5000}
]

let filterVal= employees.filter((val,index,array)=>{
      return val.salary<50000
})

console.log(filterVal)


let findVal = employees.find((val,index,array)=>{
        return val.salary < 50000
})

console.log(findVal);
