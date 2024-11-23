let data = new Promise ( (fullFilled,failure)=>{
    let dataReceived = false ;
    if (dataReceived) {
        fullFilled("Data Received Successfully")
    }
    else{
        // failure("Data Not Received")
        throw new Error("Search valid Data")
    }
})
async function executePromise(){
// data.then(message => console.log(message))
try{
let message = await data
let newMessage = await data
console.log(message);
console.log("newMessage :"+newMessage );
}
catch(error){
 console.log(error.message);
 
}
finally{
    console.log("End");   
}}
executePromise();

console.log("Last");
