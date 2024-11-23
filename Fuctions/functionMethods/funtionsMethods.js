let person = {
    pName : " john David",
    pAge : 21,
    pRole : "Frontend Developer"
}


let person1 = {
    pId : "IQA123",
    yourSelf : function(a,b){
        console.log(this.pName + " " + this.pRole);
        return (a+b)
    }
}

person1.yourSelf.call(person,10,20);
person1.yourSelf.apply(person,[100,200]);

let val=person1.yourSelf.bind(person , 1000,2000)
console.log(val());
