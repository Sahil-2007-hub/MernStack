let userName = 'Sahil Mandhare';
let age = 20;
let isStudent = true;
let height = 167.5;
let hobby = 'Coding';

// datatype in js are :
// number : represents integers and floating-point numbers
console.log('Age:', age);
console.log('Height:', height);

// string : represents a sequence of characters
console.log('Name:', userName);

// boolean : represents true or false
console.log('Is Student:', isStudent);
// BigInt : represents a large integer
// object : represents a collection of key-value pairs
// null : represents a value that is intentionally empty
// undefined : represents a value that has not been assigned a value
// symbol : represents a unique identifier

let num = 9999999999999999;
console.log(num);

console.log(typeof num);

console.log(Number.MAX_SAFE_INTEGER);

let number = BigInt("999999999999999999999");
console.log(number)
console.log(typeof number);

const user = {
    username : "Sahil Mandhare",
    age : 12,
    isLoggedIn : true
}

console.log(user["username"]);

let acTemp = null;
console.log(acTemp);
console.log(typeof acTemp);

console.log("123")
console.log(typeof "123");

console.log("true");
console.log(typeof "true");