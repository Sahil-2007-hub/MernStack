const num = 10;

console.log("Before block scope",num);
{
    const num=20;
    console.log("inside block scope",num);
}

console.log("After block scope",num);