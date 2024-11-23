function gettingParent(){

let getParent = document.querySelector(".child1")
console.log(getParent.parentElement)
console.log(getParent.parentNode);

let getParent1 = document.querySelector("html")
console.log(getParent1.parentElement);
console.log(getParent1.parentNode);

}

function getParentToChild(){
    let parentToChild = document.querySelector(".parent")
    console.log(parentToChild.childElementCount);
    console.log(parentToChild.childNodes);
    console.log(parentToChild.children);
    console.log(parentToChild.firstChild);
    console.log(parentToChild.firstElementChild);
    console.log(parentToChild.lastChild);
    console.log(parentToChild.lastElementChild);   
    
}
getParentToChild();

//Sibllings

function child(){
    let child1 = document.querySelector(".child1")
    console.log(child1.nextSibling);
    console.log(child1.nextElementSibling);
    console.log(child1.previousSibling);
    console.log(child1.previousElementSibling);
}
child();