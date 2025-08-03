
console.log("----- ARRAY -----");

let numbers = [5, 10, 15, 20, 25];


console.log("Original:", numbers);

numbers.push(30);
console.log("After push(30):", numbers);

numbers.pop();
console.log("After pop():", numbers);

let filtered = numbers.filter(num => num > 10);
console.log("Filtered :", filtered);

let NewArray = [...numbers];
console.log("New array:", NewArray);


console.log("\n----- STRING -----");

let message = "sahil mandhare ";

let upper = message.toUpperCase();
console.log("Uppercase:", upper);

console.log("Contains ->", message.includes("script"));

let words = message.split(" ");
console.log("Words:");
for (let word of words) {
    console.log(word);
}

let chars = [...message];
console.log("Characters:");
console.log(chars);


console.log("\n----- OBJECT -----");

let user = {
    name: "Sahil",
    age: 22,
    email: "sahil@example.com"
};

console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("Email:", user.email);

user.city = "Pune";

function showUser(info) {
    console.log(`User -> Name: ${info.name}, Age: ${info.age}, Email: ${info.email}, City: ${info.city}`);
}

showUser(user);

let updatedUser = { ...user, age: 23 };
console.log("\nUpdated User:");
showUser(updatedUser);
