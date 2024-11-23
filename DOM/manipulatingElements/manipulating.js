// function listElement(){
//     let manipulateList = document.createElement("li")

//     // manipulateList.innerHTML = "item-4"
//     // manipulateList.innerHTML = "<a>Link</a>item-5"
//     // manipulateList.textContent = "item-5"
//     // console.log(manipulateList);
        
//     let inputElement = document.querySelector("input")
//     manipulateList.innerText = inputElement.value
//     // console.log(manipulateList);
//     let orderList = document.querySelector("ol")
//     orderList.append(manipulateList)
//     // orderList.appendChild(manipulateList)
//     // orderList.insertBefore(manipulateList,orderList.children[0])
    
// }

function listElement(){
    let elementList = document.createElement("li")
    let inputValue = document.querySelector("input")
    
    elementList.innerText = inputValue.value
    // console.log(elementList);
    let orderList = document.querySelector("ol")
    orderList.append(elementList)
}