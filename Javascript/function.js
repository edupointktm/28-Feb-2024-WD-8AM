
// console.log("Ram")
// console.log("Ram")
// console.log("Ram")
// console.log("Ram")
// console.log("Ram")
// console.log("Ram")

////No arrguments and no return
// function msg(){
//     console.log("Ram")
// }

// msg()


// ////no arrguments but return the value
// function msg(){
//     var m = "My name is Prabhat"
//     return m
// }
// console.log(msg())
// var ret = msg()
// console.log(ret)
// function msg(n){
//     var m = "My name is "+ n
//     return m
// }

// ////with arrguments and with return the value
// var names = prompt("Enter your names :")



// document.write(msg(names))


// WAP in javascript to ask two different number and find sum, sub and mul

//normal method (old)
// function sum(a, b){
//     c = a + b
//     return c
// }
// console.log("SUM : "+sum(4,9))

//WAP in javascript to ask anu one number and check given number is ODD or EVEN by using arrow function

// //variable of funciton
// var sum = function (a, b){
//     c = a + b
//     return c
// }
// console.log("SUM : "+sum(4,9))

//latst : arrow function 
var sum =  (a, b)=>{
    c = a + b
    return c
}
console.log(" SUM : "+sum(4,9))

//WAP in javascript to ask any one number and check given number is ODD or EVEN by using arrow function

// odd_even(9)
// ans: ODD