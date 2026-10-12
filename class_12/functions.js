function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

{
    // scope
}

let a = 10;
let b = 20;

let result = addTwoNumbers(a, b);
console.log(result);

let add = (num1, num2) => {
    let result = num1 + num2;
    console.log(result);
    // return result;
}

const output = add(10, 20);
console.log(output);
