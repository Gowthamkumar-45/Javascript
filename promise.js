let newPromise = new Promise((resolve,reject)=>{
      let dataReceived = true;

      if(dataReceived){
         resolve("Data received")
      }
      else{
        reject("Data Not Received")
      }

})

newPromise.then((message)=>{
  console.log("Success : " + message );
  return "nextMessage : " + message
})
.then((nextMessage)=>{
  console.log(nextMessage);
  
})

.catch((error)=>{
    console.log("Failure : " + error );  
});


// function newPromise (resolve,reject){
//   let dataReceived =true;
//   if (dataReceived) {
//      resolve("Data Received Successfully")
//   }
//   else{
//     reject("Data Not Received")
//   }
// }

// newPromise(
//   (message)=>{
//     console.log(message);
//     newPromise(
//       (nextMessage)=>{
//         console.log(nextMessage);
//     },
//     (nextError)=>{
//        console.log(nextError);
//     }
//   )
    
//   },
//   (error)=>{
//     console.log(error);
    
//   }
// )

