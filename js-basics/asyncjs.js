// console.log('')

// console.log('')

// network req.
// i/o operation (file read/write)

// callback based

// const registerUser = (userName, callback) => {
// 	setTimeout(() => {
// 		console.log("user registered");
// 		callback('Register failed', { id: 1, name: userName });
// 	}, 2000);
// };

// const login = (data, callback) => {
// 	setTimeout(() => {
// 		console.log("user loggedin");
// 		callback(null, data.id);
// 	}, 1000);
// };

// const getProfile = (userID, callback) => {
// 	setTimeout(() => {
// 		console.log("user profile for",userID);
//         callback(null, { id: 1, name: "john" });
// 	}, 3000);
// };

// const showWelcomeMessage = (user) => {
// 	setTimeout(() => {
// 		console.log("welcome", user.name);
// 	}, 1000);
// };

// registerUser()
// login()
// getProfile()
// showWelcomeMessage()

// registerUser("john", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	login(data, (err, data) => {
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}
// 		getProfile(data, (err, data) => {
// 			if (err) {
// 				console.log(err);
// 				return;
// 			}
// 			showWelcomeMessage(data);
// 		});
// 	});
// });


// promise
// 

const registerUser = () => {
	return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ id: 1, name: 'John' })
            // reject('User register failed')
        }, 2000);
    })
};

const login = (id) => {
	return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ id: id, name: 'John' ,message:'login success'})
            // reject('User login failed')
        }, 2000);
    })
};



registerUser()
.then((data)=>{
    console.log('then',data)
    return data

})
.then((data)=>{
   return login(data.id)
})
.then(data =>{
    console.log(data)
})
.catch((error) => console.log('catch',error))
.finally(()=>{

    console.log('finally')
})


// login().then().catch()



// const getProfile = (userID, callback) => {
// 	setTimeout(() => {
// 		console.log("user profile for",userID);
//         callback(null, { id: 1, name: "john" });
// 	}, 3000);
// };

// const showWelcomeMessage = (user) => {
// 	setTimeout(() => {
// 		console.log("welcome", user.name);
// 	}, 1000);
// };
