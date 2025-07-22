console.log("Hello World");
var num=10;
var num=20;
num=30;
console.log("Before block scope",num);
{
    var num=20;
    console.log("inside block scope",num);
}

console.log("After block scope",num);