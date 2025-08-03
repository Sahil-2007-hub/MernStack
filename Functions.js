// // // // function printName(name){
// // // //     console.log(`Hello how are you ${name}`);
// // // // }

// // // // printName("Sahil");
// // // // printName("Siddhesh");
// // // // printName("Ayush");
// // // // printName("Parth");


// // // // function addNum(num1, num2) {
// // // //     let n1 = Number(num1);
// // // //     let n2 = Number(num2);
// // // //     //console.log("I am Here");
// // // //     if(isNaN(n1) || isNaN(n2)) {
// // // //         return("Enter proper number");
// // // //     }
// // // //     return n1 + n2;
// // // // }

// // // // console.log(addNum(10,"20"));


// // // // const person = {
// // // //     username: "Sahil",
// // // //     age: 18,
// // // //     greet: function greeting() {
// // // //         console.log(this); 
// // // //         return `Hello ${this.username}`; 
// // // //     }
// // // // };

// // // // console.log(person.greet());


// // // // greet : () => {
// // // //     console.log(this);
// // // //     return this.username
// // // // }

// // // // const person1 = {
// // // //   name: "Saideep",
// // // //   greet: () => {
// // // //     console.log("Hello, " + this.name);
// // // //   }
// // // // };

// // // // person1.greet(); 


// // // // function addNum(num1,num2) 
// // // // {
// // // //   return (num1+num2);
// // // // }
// // // // console.log(addNum(10,20));

// // // // const person = {
// // // //   username : "Sahil",
// // // //   age : 
// // // //   18,
// // // //   greet : function() {
// // // //     return `hello world,${this.username}`;
// // // //   }
// // // // };

// // // // console.log(person.greet());

// // // // const  greeting = () => ("Hello World");
// // // // console.log(greeting());

// // // // const nums = num1 => num1+5;
// // // // console.log(nums(10));


// // // function addNum(num1, num2) {
// // //   let result = num1 + num2;
// // //   return result;
// // // }

// // // console.log(addNum(10,20));


// // // const addition = (num1,num2) => {
// // //   let result = num1+num2;
// // //   return result;
// // // }

// // // console.log(addition(10,20));


// // // function showArgs() {
// // //   return((arguments));
// // // }

// // // console.log(showArgs(10,20,30));


// // // const showArgs1 = () => (arguments);
// // // console.log(showArgs1(10,20,30));


// // // const array = [1,2,3,4,10,20,5,50];
// // // const newArray=[];
// // // for(let i=0; i<array.length; i++)
// // // {
// // //   if(array[i]>4)  {
// // //      console.log(array[i]);
// // //      newArray.push(array[i])
// // //   }
// // // }
// // // console.log(newArray);


// // // const newArray1 = array.filter((val) => (val>4));
// // // console.log(newArray1);


// // const Strings = ["sai","ram","shyam","ishwar"];
// // const newStrings = Strings.filter((val) => (val.length > 3));
// // console.log(newStrings);


// const arr = [1,2,3,4,5,6];
// const newArr = arr.map((val) => (val*10));
// console.log(newArr);



// const Strings = ["sai","ram","shyam","ishwar"];
// const newStrings = Strings.map((str) => (str.toUpperCase()));
// console.log(newStrings);


// const studentInfo = {
//     userName : "Sai",
//     age : 23,
//     isLoggedIn : true
// }

// console.log(typeof studentInfo);
// console.log(typeof {});
// console.log(studentInfo.email="sai@gmail.com");
// console.log(Object.keys(studentInfo));
// console.log((Object.freeze(studentInfo)));
// console.log(studentInfo.age=25);
// console.log(studentInfo.hasOwnProperty("userName"));
// console.log(Object.entries(studentInfo));

// console.log(Object.values(studentInfo));

 
// //studentInfo.userName="saideep";   // to change the value
// //studentInfo.age=20;   // to change the value

// const obj1={
//   a:'1',
//   b:'2'
// }
// const obj2={
//   c:'3',
//   d:'4'
// }
// const obj3={
//   e:'5',
//   f:'6'
// }
// const allInObj = Object.assign({}, obj1, obj2, obj3);
// console.log(allInObj);


const formData = {
    name : "ram",
    email : "ram@gmail.com",
    age : 25
};
const googleData = {
    email : "saidepp@gmail.com",
    profilePic : "https://example.com/profile.jpg",
    googleId : "123456789"
};

const googleData1 = {
    name : "ganesh",
    age : 30
}

const completeProfile = {...googleData1,...googleData,...formData};
console.log(completeProfile);


const {name, email, age} = formData;
console.log(name, email, age);


const fruits = ["apple","banana","apple","orange","banana"];

const count = fruits.reduce((acc, fruits) => {
  acc[fruits] = (acc[fruits] || 0) + 1;
  //console.log(acc);
  return acc;
}, {});

console.log(count);


const Array = [10,20,30,40,50];

const ans=Array.reduce((acc, val) => (acc + val), 0);
console.log(ans);

  