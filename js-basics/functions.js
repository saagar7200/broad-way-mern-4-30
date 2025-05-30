
// function declaration
// function greet(){
//     console.log('Hello world')
// }

// // function invocation
// greet()


// function 

// function greet(name,age=34){
//     console.log('hello',name,'I am ',age)
// }

// greet("alice",20)

// function add (a,b){
//   return a + b
// }

// const result = add(10,29)

// console.log(result)


// function expression

// let x =10

// function add (a,b){
//   return a + b
// }



// const add = function (a,b){
//  return a + b
// }
// console.log(add(20,30))

// callback function



// const parent = function(name,callback) {
//     callback(name)
// }

// const child = function(name){
//     console.log('Hello',name)
// }

// parent('Bob',child)

// HOF

// const add = function (a,b){
//     return a + b
// } 

// const result = add(20,12)



// const parent = function(greet){ 
//     return function(name){
//         console.log(greet,name)
// }
// }

// const greet = parent('Hello')
// const namaste = parent('Namaste')
// greet('Alice')
// greet('Bob')
// namaste('Ram')

// function factory

// const multiply =  function (factor) {
//     return function (number) {
//         return factor * number
//     }
// }
// const multiplyBy5 = multiply(5)
// const multiplyBy10 = multiply(10)

// console.log(multiplyBy5(10))
// console.log(multiplyBy10(10))
// const multiplyBy5 = function (number){
//     return number  * 5
// }

// const multiplyBy10 = function (number){
//     return number  * 10
// }

// const multiplyBy50 = function (number){
//     return number  * 50
// }

// arrow

const add =  a =>  a * 2

console.log(add(10))


const multiply =  function (factor) {
    return function (number) {

        return factor * number
    }
}


const mul = factor => number => factor * number






const parent = (callback) =>{
  callback()
}

parent(()=>{
    console.log("hello world")
})



