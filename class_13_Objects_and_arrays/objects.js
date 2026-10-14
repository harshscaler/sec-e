// create
let user = {
    "first name" : "Harsh",
    lastName : 'Prakash',
    phoneNo : 989798989,
    isLoggedIn : true,
}

user.isLoggedIn = false; // update
user.gender = "Male"

// Read the object
// console.log(user["isLoggedIn"]);

// delete user.isLoggedIn;
// console.log(user);



// const a = 10;
// a = 20;
// console.log(a);

// const obj = {
//     isTrue : false
// }

// obj = {
//     isValid : true
// }

// obj.isTrue = true;

// console.log(obj);


// let a = 10;
// let b = a;
// b = 20;
// console.log(a , b);

let obj1 = {
    isTrue : false
}

let obj2 = obj1;
obj2.isTrue = true;

console.log(obj1 , obj2);