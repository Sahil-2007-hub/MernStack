function printName(name){
    console.log(`Hello how are you ${name}`);
}

printName("Sahil");
printName("Siddhesh");
printName("Ayush");
printName("Parth");


function addNum(num1, num2) {
    let n1 = Number(num1);
    let n2 = Number(num2);
    //console.log("I am Here");
    if(isNaN(n1) || isNaN(n2)) {
        return("Enter proper number");
    }
    return n1 + n2;
}

console.log(addNum(10,"20"));