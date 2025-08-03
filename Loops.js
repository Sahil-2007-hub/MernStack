// While Loop 
console.log("While");
let num = 0;
while(num <= 10) {
    console.log(`Number is ${num}`);
    num++;
}

// Do-While Loop
console.log("Do-While");
let count = 0;
do {
    console.log(`Count is ${count}`);
    count++;
}while(count>=10)

// For Loop
for(i=2; i<=10; i+=2)
{
    console.log(i)
}


let name = "ganesh";

for(let i=0; i<name.length; i++) {
    console.log(name[i]);
}

for(const char of name) {
    console.log(char);
}

// for(const item in user4) 
// {
//     console.log(item);
// }

// for(i=0; i<user4.length; i++)
// {
//     console.log(user4[i]+5);
// }

user4.forEach(function add5(val)
{
    console.log(val+5);
})

user4.forEach((val) => 
{
    console.log(val + 5);
})


