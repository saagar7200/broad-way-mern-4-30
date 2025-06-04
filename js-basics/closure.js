// // // // lexical


// // // const parent = () =>{
// // //     // const parentVar = 10
// // //     console.log(parentVar) //

// // //     const child = () =>{
// // //         const parentVar = 'I am from inner function'
// // //         console.log(parentVar) //
// // //         // console.log(childrenVar)

// // //         const children = () =>{
// // //             const childrenVar  = 'I am from inner function'

// // //             console.log(parentVar) //
// // //             // console.log(childrenVar)
// // //         }

// // //         children()
// // //     }

// // //     child()
// // // }

// // // parent()




// // // closure

// // // const parent = () =>{
// // //     const parentVar = 'I am from parent'
// // //     return () =>{
// // //         console.log(parentVar)
// // //     }
// // // }

// // // const children = parent()
// // // const children1 = parent()

// // // children() 
// // // children() 
 
// // // children1() 
// // // children1() 

// // // data privacy
// // // const counter = () =>{
// // //     let count = 0

// // //     return () =>{
// // //             return count ++
// // //         }
       
// // //     }
// // // }

// // const counter = () =>{
// //     let count = 0

// //     return {
// //         increment:() =>{
// //             count += 1
// //             return  count
// //         },
// //         decrement:() =>{
// //             count -=1
// //             return count 
// //         },
// //         reset:() =>{
// //             count = 0
// //             return count 
// //         }
// //     }
// // }

// // const counter1 = counter()
// // const counter2 = counter()
// // console.log(counter1.increment()) //1
// // console.log(counter1.increment()) //2
// // console.log(counter1.reset()) //0
// // console.log(counter1.increment()) //1
// // console.log(counter1.decrement()) //0
// // console.log(counter1.decrement()) //-1


// // function factory


// // 
// // const createId = (start =0) =>{
// //     let id = start
// //     return ()=>{
// //         return id++
// //     }
// // }

// // const generateId = createId(1) //100
// // const generateId2 = createId(100) //1
// // console.log(generateId())
// // console.log(generateId())

// // caching 

// const add = () =>{
//     let cache = {}

//     return (end=10) =>{
//         let sum =0
//     if(cache[end]){
//         return cache[end]
//     }else{
//         console.log('calculating...')
//         for(let i=0;i<= end;i++){
            
//             sum+=i
//         }
    
    
//         return cache[end] = sum
//     }
//     }
   

// }

// const sum = add()
// console.log(sum(1000)) // y
// console.log(sum(100)) // y
// console.log(sum(1000)) //no
// console.log(sum(100)) // no


// curring

// const add = a => b => c => a + b + c
        
// console.log(add(10)(6)(8))


// class 

// closure
// account(initialBalance,accountHolderName){

// {
// withdraw ()=
// deposit ()=>
// getBalance => balance
// getDetail =>  name & balance
// }

// }





