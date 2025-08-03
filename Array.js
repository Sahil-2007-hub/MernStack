// const user = [10,20,30,40,50];
// const user2 = [1,2,3];
 
// ans = user.concat(user2);
// console.log(ans);

// console.log([...user, ...user2]);   // Spred Operator


// let user3 = "saideep";
const user4 = [10,20,30,40,50];

// // console.log(Array.isArray(user3));
// // console.log(Array.isArray(user4));

// // let userName = "saiddep";
// // const users = [20,30,40,50,60];

// // console.log((Array.from(userName)));


// // let num = 10;
// // let num1 = 20;
// // let num2 = 30;

// // console.log(Array.of(num,num1,num2));

// //console.log(user4.slice(0,3));
// console.log("Before",user4);
// const newArr = user4.splice(0,3);
// console.log("After",newArr);

console.log("Converting function to arrow function outputs:  ");
const addNumArrow = (num1, num2) => 
{
    console.log("Number 1:",num1);
    console.log("Addition of that numbers",num1 + num2);
}
addNumArrow(10, 20);

console.log(this);


