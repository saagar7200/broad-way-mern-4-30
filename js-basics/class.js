

// // // class class_name {

// // // }

// // // class Product {
// // //      name;
// // //      #price;
// // //      category;

// // //      constructor(name,price,category){
// // //         this.name = name;
// // //         this.#price = price
// // //         this.category = category
// // //     }

// // //     getPrice (){
// // //         return this.#price
// // //     }
  

// // // }

// // // const product = new Product('abc',1000,'xyz')

// // // console.log(product)
// // // console.log(product.getPrice())



// // class Person {

// //     constructor(name,age ){
// //         this.name = name;
// //         this.age = age
// //     }

// //     speak(){
// //        console.log(this.name,'speaks')
// //     }



// // }

// // const person = new Person('abc',29)
// // person.speak()


// // // student (name age roll , faculty)

// // class Student extends Person {
// //     constructor(name,age,roll,faculty){
// //         super(name,age)
// //         this.roll = roll;
// //         this.faculty = faculty
// //     }

    
// // }


// // // Teacher (name,age, department , subject)

// // class Teacher extends Person {
// //     constructor(name,age,department,subject){
// //         super(name,age)
// //         this.subject = subject;
// //         this.department = department
// //     }

    
// // }




// // const abc = new Student('abc',17,17,'BCT')

// // console.log("👊 ~ class.js:43 ~ person:", abc)

// // person.speak()
// // abc.speak()

// // // closure --> class

// // // animal base -> dog  -> inheritance


// // class methods 

// // normal method

// // getter setter


// // class Circle {
// //     radius = 0;
// //     PI = 3.14
// //     constructor(radius){
// //         this.radius = radius
// //     }

// //     get area (){
// //         return  this.PI * this.radius * this.radius

// //     }

// //     set circle_radius(r) {
// //         this.radius = r

// //     }
// // }


// // let circle = new Circle(10)

// // console.log(circle.area)
// // circle.circle_radius = 4

// // console.log(circle.area)


// // static

// class Calculator {

//     static add (a,b){
//         return a + b
//     }
//    static  sub (a,b){
//         return a - b
//     }
//     static multiply (a,b){
//         return a * b
//     }
//     static divide (a,b){
//         return a / b
//     }
// }


// console.log(Calculator.add(10,34))



// const person  = {
//     name:'abc',
//     age:49,
//     greet:function(){
//         const inner = () =>{
//             console.log(this)
//         }
//         inner()
//     }
// }

// person.greet()

// const  demo = () => {
//     console.log(this)
// }

// console.log(demo)


// synchronous 
// blocking




// asynchronous
// non blocking

// callback based

// result = taskA() //1min
// taskB(result) // 2min
// taskC() //1min

// promise based

// async await




// setTimeout
console.log('start')

// const timer =  setTimeout((name,age)=>{
//     console.log('processing',name,age)
// },2000,'John',34)

// clearTimeout(timer)


// let count = 10
//  const interval = setInterval(()=>{
//   console.log(count--)
//   if(count === 0){
//     clearInterval(interval)
//   }
// },1000)

// closure
for(var i = 0; i<=10;i++){
    setInterval(()=>{
        console.log(i)
    },1000)
}



console.log('end')


// setInterval





