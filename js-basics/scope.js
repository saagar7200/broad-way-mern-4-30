// scope
// let x = "global scope"
// var y = "global scope"
// const z = "global scope"

// global scope


// block scope
// if(true){
//     let x = "block scope"
//     const z = "block scope"
//     var y = "block scope"
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }

// console.log(x)
// console.log(y)
// function scope
// function global (){
//     let x = "function scope"
//     const z = "function scope"
//     var y = "function scope"
//     console.log(x)
//     console.log(y)
//     console.log(z)

// }
// console.log(y)


// global()


// lexical scope

// const parent = () =>{
//     let x = 'Lexical scope'

//     console.log(x)
//     const child = () =>{
//         let x = 'children Lexical scope'

//         console.log(x)

//         const children = () =>{

//             console.log(x)
//         }
//         children()
//     }

//     child()

// }


// parent()


// closure


// add10:{
//  base=10
// }
// add30:{
//  base=30
// }

// const add = (base) =>{
//     return (number) =>{
//             return base + number
//     }
// }
// const add10 = add(10)
// const add30 = add(30)

// console.log(add10(20)) //
// console.log(add10(40)) //
// console.log(add30(26)) //

// child()



