// network fetch
// fetch 
// returns promise 

// https://jsonplaceholder.typicode.com/


const getData = (url) =>{

   return fetch(url)

}


// getPosts()
// .then(async (res) =>{
//     console.log(res)
//     if(!res.ok){
//         throw new Error('Something went wrong')
//     }
//     res
//     return await res.json()
// })
// .then(data => console.log(data) )
// .catch(err => console.log(err))
// .finally()



// async/await 

const handleFetch = async() =>{

   try{
    const response = await  getData('https://jsonplaceholder.typicode.com/posts')

    const data = await response.json()
    console.log(data)

   }catch(err){
     console.log(err)
   }finally{
    console.log("finally")
   }

}

handleFetch()


