// const fruits=["apple","banana","cherry"];
// for (const fruit of fruits)
// {
//     console.log(fruit.toUpperCase());
    
// }


// const students = ["Ravi", "Priya", "Amit"];

// for (const name of students) {
//   console.log(`Welcome, ${name}!`);
// }

// const scores = [80, 90, 100];
// for (const score of scores)
//  {
//   console.log(score * 2);
// }

// const numbers = [11, 22, 33, 44, 55];

// numbers.forEach(num => {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

// const user={
//   name :"Rahul",
//   age : 24,
//   city: "Delhi"
// };
// for(let key in user){
//   console.log(key + "=>" + user[key]);
// }

const firstnames=['Asha','Vikram'];
const lastnames=['Singh','Sharma'];
let start=0;
for(const elem of firstnames)
{
  console.log(`${elem} ${lastnames[start]}`);
  start++;
}