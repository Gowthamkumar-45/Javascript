//charAt

let str = "Hello World"
console.log(str.charAt(1));//it returns the character of the given index value

//charCodeAt

let str1="javascript"
console.log(str1.charCodeAt(1));//its returns the character ASCCI Value of the given index value

//concat

console.log(str.concat(" ",str1)); // its used to join the two string 
 
//includes
let str2= "single thread"

console.log(str2.includes("i"))//this method is used to check the given char is there in str ,is it in then return the true 

//indexof

let str3="david"
console.log(str3.indexOf("a"));//the given chr is there in the str it returns the index of the char

//lastindexof

let str4="david"
console.log(str4.lastIndexOf("i"));//its also  returns the index of the given char but its searched the char in reverse order

//replace or replace all 

let str5 = "js is a scripting language-js"
console.log(str5.replace("js","javascript"));//its replace the js in to javascript
console.log(str5.replaceAll("js","javascript"));//its replace the all js in to javascript








