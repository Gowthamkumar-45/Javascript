fetch("https://fakestoreapi.com/users")
    .then((response) => {
        if (response.ok) {
            return response.json() 
        }
        else{
            throw new Error ("Data Not Found")
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error)=>{
      console.log(error.message); 
    })

    

async function dataFetch() {
    try{
         let response = await fetch("https://fakestoreapi.com/users/2")
         if(response.ok){
            let data = await response.json();
            console.log(data);
         }
         else{
            throw new Error ("Data Not Found") 
         }
    }
    catch(error){
          console.log(error.message)   
    }
}
dataFetch();