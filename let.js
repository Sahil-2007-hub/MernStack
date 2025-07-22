let num = 10;
num=30

console.log("Before block scope",num);
{
    let num=20;
    console.log("inside block scope",num);
}

console.log("After block scope",num);