let username = "Sai";
let username1 = new String("Sahil");
let num = new Number(10);
console.log(typeof username);
console.log(typeof username1);
console.log(typeof num);

let user = "deep";
console.log(user.toUpperCase());
console.log(user.indexOf("eep"));
console.log(user.trim().length);
console.log(user.replace('e','i'))  // Syntax :cuser.replace('old','new');
console.log(user.includes('sai'))

let userName = "sai%deep%ram%shyam%karan";
userName = userName.split('%');
console.log(userName);

let user3 = 'saideep';
console.log(user3.substring(-4,5));
console.log((user3.slice(-4,5)));+