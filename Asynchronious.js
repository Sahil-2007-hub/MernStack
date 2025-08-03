// // // // // // // // // console.log('start');
// // // // // // // // // setTimeout(() => {
// // // // // // // // //     console.log('Timers');
// // // // // // // // // }, 5000);

// // // // // // // // // console.log('end');

// // // // // // // // // let count = 0;
// // // // // // // // // const timer = setInterval(() => {
// // // // // // // // //                 console.log(`count:${count}`);
// // // // // // // // //                 count++;
// // // // // // // // //                 if(count > 10) {
// // // // // // // // //                     clearInterval(timer);
// // // // // // // // //                   }
// // // // // // // // //                 },2000);



// // // // // // // // function greet(name,callback) {
// // // // // // // //     console.log(`${name}`);
// // // // // // // //     setTimeout(callback, 10000);
// // // // // // // // }
// // // // // // // // function add(){
// // // // // // // //     console.log("After 10s");
// // // // // // // // }

// // // // // // // // greet("Sahil",add);


// // // // // // // function sayHello(callback) {
// // // // // // //   setTimeout(() => {
// // // // // // //     console.log("Hello");
// // // // // // //     callback();
// // // // // // //   }, 1000);
// // // // // // // }

// // // // // // // function askHowAreYou(callback) {
// // // // // // //   setTimeout(() => {
// // // // // // //     console.log("How are you?");
// // // // // // //     callback();
// // // // // // //   }, 1000);
// // // // // // // }

// // // // // // // function sayGoodbye(callback) {
// // // // // // //   setTimeout(() => {
// // // // // // //     console.log("Goodbye");
// // // // // // //     callback();
// // // // // // //   }, 1000);
// // // // // // // }

// // // // // // // // Nested callbacks — callback hell
// // // // // // // sayHello(() => {
// // // // // // //   askHowAreYou(() => {
// // // // // // //     sayGoodbye(() => {
// // // // // // //       console.log("Conversation ended.");
// // // // // // //     });
// // // // // // //   });
// // // // // // // });


// // // // // // let greet = new Promise((resolve, reject) => {
// // // // // //     console.log("Hello");
// // // // // //     resolve();
// // // // // //   });

// // // // // // greet.then(() => {
// // // // // //     console.log('Bye');
// // // // // // });
    
// // // // // // greet.then(() => {
// // // // // //     console.log('bye');
// // // // // // })

// // // // // console.log("\nUsing Reject:-");
// // // // // const loggedInStatus = new Promise ((resolve, reject) =>{
// // // // //     setTimeout(() =>{
// // // // //         let isLoggedIn = false;

// // // // //         if(isLoggedIn === true){
// // // // //             console.log("User Is Logged In!");
// // // // //             resolve();
// // // // //         }
// // // // //         else{
// // // // //             console.log("User is not logged in!");
// // // // //             reject();
// // // // //         }
// // // // //     },3000);
// // // // // });

// // // // // loggedInStatus.then(() =>{
// // // // //     console.log("After logged in");
    
// // // // // }).catch(()=>{
// // // // //     console.log("error");
// // // // // })

// // // // let isLoggedIn = false;
// // // // const loggedInStatus = new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //         let isLoggedin = true;

// // // //         if(isLoggedin){
// // // //             console.log("User is Logged");
// // // //             resolve({'name': 'Sahil', 'age': 18});
// // // //         }
// // // //         else{
// // // //             console.log("user is not logged");
// // // //             reject("User is not logged in!"); 
// // // //         }
// // // //     },3000)
// // // // })

// // // // loggedInStatus.then((user) => {
// // // //     console.log(user)
// // // // }).catch(() => {
// // // //     console.log("Error");
// // // // })

// // // const promise1 = new Promise((resolve, reject) =>{
// // //     setTimeout(() =>{
// // //         resolve("Task 1 completed");
// // //     }, 1000);
// // // });

// // // const promise2 = new Promise((reject, resolve) =>{
// // //     setTimeout(() =>{
// // //         resolve("Task 2 completed");
// // //     }, 1000);
// // // });

// // // const promise3 = new Promise((reject, resolve) =>{
// // //     setTimeout(() =>{
// // //         reject("Task 3 completed");
// // //     }, 1000);
// // // });

// // // Promise.all([promise1, promise2, promise3])
// // // .then((results)=>{
// // //      console.log("All Promises resolved!");
// // //      console.log(results);
// // // }).catch((error) => {
// // //     console.log("One Promise Rejected");
// // //     console.log(error);
// // // }).finally(() =>{
// // //     console.log("Code Executed");  
// // // })


// // // function greet()
// // // {
// // //     return new Promise((resolve, reject) => {
// // //             //console.log("Hello");
// // //             resolve("Success");
// // //     });
// // // }

// // // console.log(greet());


// // async function main() {
// //     return "Hello World";
// // }

// // console.log(main());


// const userLoggedInStatus = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isUserLoggedIn = true; // condition is true

//     if (isUserLoggedIn) {

//       console.log("user is logged in !!!!!!");
//       resolve({userName: "saideep", age: 23});
//       // Resolve the promise with user data

//     } else {

//       console.log("user logged in error");
//       reject("something went wrong");
//       // Reject the promise with an error message

//     }
//   }, 3000);
// });

// async function getUserData() {
//    try {
//     const userData = await userLoggedInStatus;
//     console.log(userData); // Return the user data
//    }
//    catch (error) {
//     console.error("Error:", error);
// }
// }
// console.log(getUserData());


async function fetchApi() {
    try { 
        result = await fetch('https://jsonplaceholder.typicode.com/todos')
     } 
     catch(error) {
        console.log("Error:", error);
     }
     const res = await result.json();
     console.log(res);
}

console.log(fetchApi());