// const arr = [10,30,40,20,30];
// console.log("Original Array:", arr);

// const newArr = arr.slice(-4,-1);
// console.log("NewArr", newArr);

// console.log("After slice", arr);


const arr = [10,30,40,20,30];
console.log("Original Array:", arr);

const newArr = arr.splice(1,3,60,70,80);
console.log("NewArr", newArr);

console.log("After slice", arr);

