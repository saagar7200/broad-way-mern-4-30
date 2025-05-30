// // Object

// // const product = {
// //     name:'Laptop',
// //     model:'2024',
// //     price:200000,
// // }

// // function a(){
// //     console.log(this)
// // }
// // a()
// // console.log(this)
// // let person = new Object()

// // console.log(product)

// let productName = 'name'
// // product.getPrice = function(){
// //     console.log('Hello ')
// // }
// // read/get value

// // dot notation
// // let name = product.name
// // console.log(product.name)

// // bracket notation
// // console.log(product[productName])

// const product = {
//     name:'Laptop',
//     model:'2024',
//     price:200000,
// }
// // modify / update
// product.category = 'Electronics'
// product.name = 'Dell INS'

// // product.getPrice()

// // console.log(product)

// // Book 

// // delete product.name
// // console.log(product)

// // destructuring
// // let productName = product.name
// // let model = product.model

// // 
// // const {name,model,price} = product



// // console.log(name,model,price)


// let x =20

// let y = x
// y= 30

// console.log(x,y)

// const book = {
//     author:'abc'
// }



// // spread op.
// const productCopy = {...product,...book}

// // rest op
// const {name,...others} = productCopy
// console.log(name,others)


// productCopy.name='Mac'

// console.log(product)
// console.log(productCopy)


// // memory
// //101   x  -> 20
// //102   y -> 30
// // 103  product -> 1001
// // 103 productCopy -> 1001


// // Heap memo.
// // 1001  product  => {.....}






const product = {
    name:'Laptop',
    model:'2024',
    price:200000,
    category:{
        name:'abc'
    }
}

console.log(Object.keys(product))
console.log(Object.values(product))
console.log(Object.entries(product))


console.log(Object.fromEntries([ [ 'name', 'Laptop' ], [ 'model', '2024' ], [ 'price', 200000 ] ]))


console.log(product.hasOwnProperty('productName'))

// Object.seal(product)
Object.freeze(product)

product.name='hello'
product.newField = ''

console.log(product)

