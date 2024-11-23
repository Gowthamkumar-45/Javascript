let arr = [1,2,3,4]
let arr1 = [4,5,6,7]

// //Concat method

let newArr = arr.concat(arr1)
let newArr1 = arr.concat(10,20,30)
let newArr2 = [].concat(arr)

arr[0] = 111;

console.log( newArr, newArr1, newArr2, arr );

//Slice Method

let nArr = [10,2,3,4,5,6,7]


let slicedVal = nArr.slice()

nArr[0] = 101

let slicedVal1 = nArr.slice(1)
let slicedVal2 = nArr.slice(1, 4)
let slicedVal3 = nArr.slice( 0,3)
//                           ( start, end-1 ) ( 1, 4-1 )
console.log( slicedVal, slicedVal1, slicedVal2, slicedVal3 );

//Flat method

let arr2 = [1,2,3,[4,[5,6,[40,50, [70,80] ]]]]

let nArr2 = arr2.flat(2)
let nArr1 = arr2.flat(Infinity)

console.log( arr2, nArr2, nArr1 );
console.log(  nArr1 );

//Fill method

let arr3 = [10,20,30]

arr3.fill( 101, 0, 2 )
arr3.fill( 103, 2, 5 )

console.log( arr3 );


